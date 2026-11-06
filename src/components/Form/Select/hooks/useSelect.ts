import {useEffect, useRef, useState} from "react";
import type {CSSProperties} from "react";
import useOutsideClicked from "../../../../hooks/useOutsideClicked";
import useRecalculateOnViewportChange from "../../../../hooks/useRecalculateOnViewportChange";
import type {SelectOptionType, SelectProps, SelectOptionOnClickType} from "../select-exports";
import {multiSelectInputWrapperId} from "../InputForMultiSelectMode";
import {inputWrapperId} from "../../Input/Input";
import useSelectOptionsList from "./useSelectOptionsList";


const dropDownOffset = 1


function useSelect(
  {
    apiAddress, onSelect, options, value, name, mode, loading: loadingFromParent, apiOptionKey, apiOptionValue,
    inputProps
  }: SelectProps
) {

  const {
    optionsList, currentPage, rowsPerPage, allCount, setPage, loading,
    setQuery, filteredOptions, overlayLoading, selectDropDownRef
  } = useSelectOptionsList({
    options, apiAddress, loadingFromParent, apiOptionKey, apiOptionValue
  })

  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false)

  const inputWrapperRef = useRef<HTMLDivElement | null>(null)

  useOutsideClicked(inputWrapperRef, closeDropDown, [value])

  function toggleDropDown() {
    if (inputProps?.disabled || loadingFromParent) return

    setDropDownOpen(prev => {
      if (prev) {
        setCurrentValueToInput()
        setQuery('')
      }
      return !prev
    })
  }

  function closeDropDown() {
    setCurrentValueToInput()
    setQuery('')
    setDropDownOpen(false)
  }

  const optionOnClick: SelectOptionOnClickType = function (e: any, selectValue: SelectOptionType) {
    if (mode === 'multiple') {
      setInputValue('')
      scrollToInput()
      const isExists = value && Boolean(value?.find((item: SelectOptionType) => item.id === selectValue.id))
      if (isExists) {
        onSelect(value?.filter((item: SelectOptionType) => item.id !== selectValue.id) || [])
      } else {
        onSelect([...value || [], selectValue])
      }
    } else {
      closeDropDown()
      onSelect(selectValue)
    }
    setQuery('')
    mode === 'single' && setDropDownOpen(false)
    e.stopPropagation()
  }

  function getInputElement() {
    const element: HTMLInputElement = document.querySelector(`#${name}`)!
    return element
  }

  function scrollToInput() {
    const element = getInputElement()
    if (!element) return
    element.scrollIntoView({ behavior: "smooth", block: "center", inline: 'center' })
  }

  function setInputValue(inputValue: string) {
    const element = getInputElement()
    if (!element) return
    element.value = inputValue
    element.title = inputValue
  }

  function setCurrentValueToInput() {
    if (mode === 'multiple') {
    } else {
      if (value === '') {
        setInputValue('')
      } else if (value != null) {
        value != null && setInputValue(value?.name || '')
      }
    }
  }

  useEffect(() => {
    setCurrentValueToInput()
  }, [value]);

  function onQuery(e: any) {
    !dropDownOpen && setDropDownOpen(true)
    const targetValue = e.target.value.trim().toLowerCase()
    setQuery(targetValue)

    // setInputValue(targetValue)
  }

  function onRemoveHandler(tagId: SelectOptionType['id']) {
    if (mode === 'single') return
    const tagsInstance = value?.filter((item: SelectOptionType) => item.id !== tagId)
    tagsInstance && onSelect(tagsInstance)
  }

  function clearInput() {
    setDropDownOpen(false)
    setInputValue('')
    setQuery('')
    if (mode === 'multiple') {
      onSelect([])
    } else {
      onSelect('')
    }
  }

  const [dropDownStyle, setDropDownStyle] = useState<CSSProperties>({})
  const dropDownRef = useRef<HTMLDivElement>(null)

  function getAnchorPositions() {
    const wrapperElement = inputWrapperRef.current
    const inputElement = wrapperElement?.querySelector<HTMLElement>(mode === 'multiple' ? `#${multiSelectInputWrapperId}` : `#${inputWrapperId}`)

    const wrapperPosition = wrapperElement?.getBoundingClientRect()
    const inputPosition = inputElement?.getBoundingClientRect()

    if (!wrapperPosition || !inputPosition) return null

    return {wrapperPosition, inputPosition}
  }

  /**
   * The dropdown is `position: fixed`, so its coordinates are relative to the viewport.
   * They have to be recalculated on every scroll/resize, otherwise the dropdown keeps the
   * coordinates of the moment it was opened and drifts away from the input.
   */
  function calculateDropDownStyle() {
    const positions = getAnchorPositions()
    if (!positions) return

    const {wrapperPosition, inputPosition} = positions
    const dropDownHeight = dropDownRef.current?.offsetHeight || 0
    const spaceBelowInput = window.innerHeight - inputPosition.bottom
    const shouldOpenAbove = dropDownHeight > 0 &&
      spaceBelowInput < dropDownHeight + dropDownOffset &&
      inputPosition.top > dropDownHeight + dropDownOffset

    const nextStyle: CSSProperties = {
      left: wrapperPosition.left,
      width: wrapperPosition.width,
      top: shouldOpenAbove
        ? inputPosition.top - dropDownOffset - dropDownHeight
        : inputPosition.bottom + dropDownOffset,
    }

    //don't re-render the dropdown (and its options) when the position did not change at all
    setDropDownStyle((prev) => (
      prev.top === nextStyle.top && prev.left === nextStyle.left && prev.width === nextStyle.width
        ? prev
        : nextStyle
    ))
  }

  //keeps the dropdown under the input while the page (or any inner container) scrolls
  useRecalculateOnViewportChange(calculateDropDownStyle, {enabled: dropDownOpen})

  useEffect(function () {
    calculateDropDownStyle()
  }, [dropDownOpen])

  useEffect(() => {
    if (mode !== 'multiple') return
    setTimeout(calculateDropDownStyle, 200)
  }, [value])

  //the dropdown height changes (options load, pagination) and that can change the open direction
  useEffect(() => {
    if (!dropDownOpen || !dropDownRef.current) return

    const resizeObserver = new ResizeObserver(calculateDropDownStyle)
    resizeObserver.observe(dropDownRef.current)

    return () => resizeObserver.disconnect()
  }, [dropDownOpen])

  //add label to current value when has not label
  useEffect(() => {
    if (mode !== 'multiple' && value && value?.id !== null && !value?.name && optionsList.length > 0) {
      const currentObjectValue = optionsList.find(item => item.id === value.id)
      currentObjectValue && onSelect(currentObjectValue)
    }
  }, [value, optionsList]);

  return {
    inputWrapperRef, toggleDropDown, dropDownOpen, optionsList, optionOnClick,
    onQuery, filteredOptions, onRemoveHandler, clearInput, dropDownStyle, dropDownRef,
    currentPage, rowsPerPage, allCount, setPage, loading, overlayLoading, selectDropDownRef
  }
}

export default useSelect
import {useEffect, useRef} from "react";
import type {WheelDateTimePickerColumnProps} from "../WheelDateTimePickerColumn";


type Props = {
  itemHeight: number;
} & Pick<WheelDateTimePickerColumnProps, 'value' | 'items' | 'onChange'>

function useWheelDateTimePickerColumn(
  {
    value, items, itemHeight, onChange
  }: Props
) {

  const ref = useRef<any>(null);

  const scrollTimeout = useRef<any>(null);

  // drag state
  const isDown = useRef(false);
  const startY = useRef(0);
  const startScrollTop = useRef(0);
  const deltaRef = useRef(0);
  const raf = useRef<any>(null);

  useEffect(() => {
    const index = items.indexOf(value);
    if (index >= 0 && ref.current) {
      ref.current.scrollTo({
        top: index * itemHeight,
        // behavior: "smooth",
      });
    }
  }, [value, items, itemHeight]);

  const snapToNearest = () => {
    const el = ref.current;
    if (!el) return;

    const index = Math.round(el.scrollTop / itemHeight);

    el.scrollTo({
      top: index * itemHeight,
      behavior: "smooth",
    });

    onChange(items[index]);
  };

  useEffect(function () {
    const handleScroll = (e: any) => {
      if (isDown.current) return;

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      scrollTimeout.current = setTimeout(() => {
        snapToNearest();
      }, 120);
    }

    if (ref.current) {
      ref.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('scroll', handleScroll);
      }
    }
  }, [value, ref, snapToNearest])

  // const handleClick = (i) => {
  //   if (!ref.current) return;
  //
  //   ref.current.scrollTo({
  //     top: i * itemHeight,
  //     behavior: "smooth",
  //   });
  // };

  const animate = () => {
    if (!ref.current) return;

    ref.current.scrollTop = startScrollTop.current - deltaRef.current;
    raf.current = requestAnimationFrame(animate);
  };

  const handleMouseDown = (e: any) => {
    isDown.current = true;

    startY.current = e.pageY;
    startScrollTop.current = ref.current.scrollTop;
    deltaRef.current = 0;

    raf.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      if (!isDown.current) return;
      deltaRef.current = e.pageY - startY.current;
    };

    const handleMouseUp = () => {
      if (!isDown.current) return;

      isDown.current = false;

      if (raf.current) {
        cancelAnimationFrame(raf.current);
        raf.current = null;
      }

      snapToNearest();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [snapToNearest]);

  return {
    handleMouseDown, ref
  }
}

export default useWheelDateTimePickerColumn;
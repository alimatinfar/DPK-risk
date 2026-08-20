import EmptyState from "../../components/others/RenderLogic/EmptyState";
import FilterEmptyState from "../../components/svg/RenderLogic/FilterEmptyState";

function SearchPageEmptyState() {
  return (
    <EmptyState
      icon={<FilterEmptyState/>}
      title='داده‌ای برای نمایش وجود ندارد!'
      description='جهت نمایش اطلاعات، ابتدا فیلترهای جستجو را تکمیل و جستجو کنید'
    />
  );
}

export default SearchPageEmptyState;
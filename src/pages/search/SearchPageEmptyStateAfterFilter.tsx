import EmptyStateIcon from "../../components/svg/RenderLogic/EmptyStateIcon";
import EmptyState from "../../components/others/RenderLogic/EmptyState";

function SearchPageEmptyStateAfterFilter() {
  return (
    <EmptyState
      icon={<EmptyStateIcon/>}
      title='نتيجه اي يافت نشد !'
      description='لطفاً فیلترهای اعمال‌شده را بررسی کرده و در صورت نیاز، شرایط جستجو را تغییر دهید.'
    />
  );
}

export default SearchPageEmptyStateAfterFilter;
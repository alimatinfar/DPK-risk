import SkeletonSection from "../../../search/skeleton/SkeletonSection.tsx";

function AdminHighRiskIndividualsCardsLoading() {
  return (
    <div className="flex flex-col gap-4">
      <SkeletonSection cardRows={3} />
      <SkeletonSection cardRows={3} />
      <SkeletonSection cardRows={4} />
    </div>
  );
}

export default AdminHighRiskIndividualsCardsLoading;

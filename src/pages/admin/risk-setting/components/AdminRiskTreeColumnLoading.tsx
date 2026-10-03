import Skeleton from "../../../../components/others/Skeleton/Skeleton.tsx";

function AdminRiskTreeColumnLoading() {
  return Array(5).fill(undefined).map(_ => (
    <Skeleton size='w-full h-14 rounded-lg' />
  ))
}

export default AdminRiskTreeColumnLoading;

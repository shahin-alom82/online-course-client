import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useTeacher = () => {
      const axiosPublic = useAxiosPublic()
      const { data: teacher = [], isPending: loading, refetch } = useQuery({
            queryKey: ["teacher"],
            queryFn: async () => {
                  const res = await axiosPublic.get("/teacher");
                  return res.data;
            },
      });
      return [teacher, loading, refetch];
}
export default useTeacher;
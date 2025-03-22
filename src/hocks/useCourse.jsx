import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useCourse = () => {

      const axiosPublic = useAxiosPublic()
      const { data: menu = [], isPending: loading, refetch } = useQuery({
            queryKey: ["course"],
            queryFn: async () => {
                  const res = await axiosPublic.get("/course");
                  return res.data;
            },
      });

      return [menu, loading, refetch];

}


export default useCourse;
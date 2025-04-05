import axios from "axios";

const axiosPublic = axios.create({
      baseURL: "https://edublinkserver.vercel.app",
});

const useAxiosPublic = () => {
      return axiosPublic;
};

export default useAxiosPublic;
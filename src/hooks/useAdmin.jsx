import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    // Only proceed if user is available
    const { data: isAdmin } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            if (!user?.email) return false; // Return false if user email is not available

            const res = await axiosSecure.get(`/user/admin/${user.email}`);
            console.log(res.data);
            return res.data?.admin;
        },
        enabled: !!user?.email, // Only run if user email exists
    });

    return [isAdmin];
};

export default useAdmin;
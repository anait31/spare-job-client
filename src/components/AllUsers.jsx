import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data
        }
    })

    const handleUserDelete = user => {
        axiosSecure.delete(`/users/${user._id}`)
            .then(() => {
                refetch()
            })
    }

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(() => {
                refetch()
            })
    }

    return (
        <div className="container mx-auto">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {users.map((user, idx) => <tr key={user._id}>
                            <th>{idx + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user?.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)}>User</button>}</td>
                            <td><button onClick={() => handleUserDelete(user)}>Delete</button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
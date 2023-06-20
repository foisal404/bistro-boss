import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUserCog } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const data = await fetch("http://localhost:5000/users");
    return data.json();
  });
  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "user is admin now",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleDeleteUser = (user) => {
    console.log(user);
  };
  console.log(users);
  return (
    <div className="w-full">
      <h2>Tital Users {users.length}</h2>
      <div className="overflow-x-auto ">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>email</th>
              <th>role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      className="btn bg-orange-400"
                      onClick={() => handleMakeAdmin(user)}
                    >
                      <FaUserCog />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-error"
                    onClick={() => handleDeleteUser(user)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;

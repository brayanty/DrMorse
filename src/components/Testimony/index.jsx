import { useEffect, useState } from "react";

const END_POINT_USER = "https://randomuser.me/api/?results=3";

function useUsers() {
  const [isUsers, setUsers] = useState([]);

  useEffect(() => {
    fetch(END_POINT_USER)
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.error("Error:", error));
  }, []);

  return isUsers;
}

function Testimony() {
  const users = useUsers();

  return (
    <section
      className="container mx-auto flex flex-col justify-center items-center
     p-4 gap-10"
    >
      <h3 className="text-center text-black text-4xl font-primarybold">
        Testimonio de nuestros clientes
      </h3>
      <div className="flex flex-row justify-center flex-wrap gap-4 items-center">
        {users.map((user) => (
          <div
            key={user.login.uuid}
            className="flex flex-row justify-center items-center gap-2 p-4 rounded-xl bg-slate-200 text-text"
          >
            <figure className="md:w-14 w-[7rem] overflow-hidden rounded-full">
              <img
                className="w-full h-full"
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
              />
            </figure>
            <header>
              <h4 className="text-xl font-primaryMedium">
                {user.name.first} {user.name.last}
              </h4>
              <div className="">
                <p className="text-base font-primaryRegular">
                  Un excelente servicio he recibido con ustedes. Excelente
                  servicio
                </p>
              </div>
            </header>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimony;

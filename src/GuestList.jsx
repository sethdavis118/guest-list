import { ContextData } from "./ContextDataFunctions";
import { GetDataHooks } from "./FetchDataHooks";

export const GuestList = () => {
  const { setIsSelected, setGuestId } = ContextData();
  const url =
    "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2507-FTB-ET-WEB-FT/guests";

  const data = GetDataHooks(url);

  const getId = (id) => {
    setIsSelected(true);
    setGuestId(id);
  };

  return (
    <>
      <h1>Guest List</h1>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
          {data.map((guest) => {
            return (
              <tr key={guest.id} onClick={() => getId(guest.id)}>
                <td>{guest.name}</td>
                <td>{guest.email}</td>
                <td>{guest.phone}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="table-footer">
              Select a guest to see more details.
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

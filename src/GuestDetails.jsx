import { ContextData } from "./ContextDataFunctions";
import { GetDataHooks } from "./FetchDataHooks";

export const GuestDetails = () => {
  const { setIsSelected, guestId } = ContextData();
  const url = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2507-FTB-ET-WEB-FT/guests/${guestId}`;
  const guest = GetDataHooks(url);
  return (
    <div className="container">
      <h2 className="name-info">{guest.name}</h2>
      <h3 className="job-info">{guest.job}</h3>
      <p className="contact-header">Email:</p>
      <p className="contact-info">{guest.email}, </p>
      <p className="contact-header">Phone:</p>
      <p className="contact-info">{guest.phone}</p>
      <p className="contact-header">Bio:</p>
      <p className="bio-info">{guest.bio}</p>
      <button className="back-button" onClick={() => setIsSelected(false)}>
        Back
      </button>
    </div>
  );
};

import { GuestList } from "./GuestList";
import { GuestDetails } from "./GuestDetails";
import { ContextData } from "./ContextDataFunctions";

export default function App() {
  const { isSelected } = ContextData();

  if (isSelected === false) {
    return (
      <>
        <GuestList></GuestList>
      </>
    );
  } else {
    return (
      <>
        <GuestDetails></GuestDetails>
      </>
    );
  }
}

import { useEffect } from "react";
import { MessegeContainer } from "./styles";

export default function Messege({ msg, visible, setVisible }) {
  useEffect(() => {
    if (!msg.name) {
      setVisible(false);
      return;
    }
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [msg]);

  return (
    <>
      {visible && (
        <MessegeContainer type={msg.type}>
          <p>{msg.name}</p>
        </MessegeContainer>
      )}
    </>
  );
}

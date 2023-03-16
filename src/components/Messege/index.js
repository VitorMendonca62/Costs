import { useEffect } from "react";
import { MessegeContainer } from "./styles";

export default function Messege({ type, msg, visible, setVisible }) {
  useEffect(() => {
    if (!msg || !type) {
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
        <MessegeContainer type={type}>
          <p>{msg}</p>
        </MessegeContainer>
      )}
    </>
  );
}

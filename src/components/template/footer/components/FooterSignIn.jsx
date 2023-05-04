import { useGlobalContext } from "@/context/useContext";

import AppButton from "../../../ui/Button/AppButton";

import { Link } from "react-router-dom";

import {auth } from "../../../../firebase"

function FooterSignIn() {
  const { lang, user } = useGlobalContext();

  return (
    <>
      {!auth.currentUser && (
        <section id='footer-signin'>
          <main>
            <p>{lang.footer.footer_signin_title}</p>
            <Link to={"/login"}>
              <AppButton text={lang.label.login_title} />
            </Link>
          </main>
        </section>
      )}
    </>
  );
}

export default FooterSignIn;

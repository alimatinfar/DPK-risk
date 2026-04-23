import {useNavigate} from "react-router";
import {useEffect} from "react";
import ROUTER_LINKS from "../../constances/routerLinks.ts";


function HomePage() {

  const navigate = useNavigate()

  useEffect(() => {
    navigate(ROUTER_LINKS.SEARCH)
  }, []);

  return (
    <div>
    </div>
  );
}

export default HomePage;
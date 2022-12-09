import { Heading } from "grommet";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
<Heading
size='large'
color='#263743'>
  NC News
</Heading>
</Link>
  );
}

export default Header;

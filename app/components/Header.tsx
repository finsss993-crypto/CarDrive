import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Container, Font, Logo, Navigation } from "./Header.style";

export default function Header() {
  return (
    <Container >
        <Logo>DrivEon</Logo>
        <Navigation>
            <Font>Каршеринг</Font>
            <Font>О нас</Font>
            <Font>Поддержка</Font>

        </Navigation>
        <div>
            <Button type="primary" icon={<DownloadOutlined/>} size="large" style={{fontFamily: 'boon'}}>
            СКАЧАТЬ
          </Button>
        </div>
    </Container>
    
  )
}

import Link from "next/link";
import { Bar, Cta, Item, Label, MidWrap, Row, Value } from "./Midlle.style";

export default function Midlle() {
  return (
    <MidWrap>
      <Row>
        <Item>
          <Value>Москва</Value>
          <Label>город запуска</Label>
        </Item>
        <Item>
          <Value>24/7</Value>
          <Label>машины на линии</Label>
        </Item>
        <Item>
          <Value>от 6 ₽/мин</Value>
          <Label>прозрачный тариф</Label>
        </Item>
      </Row>
      <Bar />
      <Cta>
        <Link href="#park">Смотреть парк</Link>
        <span aria-hidden>·</span>
        <Link href="#zayavka">Оставить заявку</Link>
      </Cta>
    </MidWrap>
  );
}

"use client";

import { Button, Form, Input, Select } from "antd";
import { useState } from "react";
import BlurText from "./BlurText/BlurText";
import {
  FieldLabel,
  FormCard,
  FormGrid,
  FormTitle,
  Section,
  Sub,
} from "./LeadForm.style";

export default function LeadForm() {
  const [sent, setSent] = useState(false);
  const [form] = Form.useForm();

  const onFinish = () => {
    setSent(true);
    form.resetFields();
  };

  return (
    <Section id="zayavka">
      <FormTitle role="heading" aria-level={2}>
        <BlurText
          text="Оставить заявку"
          delay={100}
          animateBy="chars"
          direction="top"
          className="lead-title-blur"
        />
      </FormTitle>
      <Sub>
        <BlurText
          text="Мы свяжемся с вами и подскажем, как начать поездки в DrivEon — без очередей в офисе."
          delay={40}
          animateBy="words"
          direction="top"
          className="lead-sub-blur"
        />
      </Sub>

      <FormCard>
        {sent ? (
          <p className="thanks">
            Спасибо! Заявка принята. Скоро с вами свяжется менеджер.
          </p>
        ) : (
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            requiredMark={false}
            style={{ maxWidth: 520, margin: "0 auto" }}
          >
            <FormGrid>
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Как к вам обращаться?" }]}
                style={{ marginBottom: 0 }}
              >
                <div>
                  <FieldLabel>Имя</FieldLabel>
                  <Input
                    size="large"
                    placeholder="Иван"
                    className="dark-input"
                  />
                </div>
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[{ required: true, message: "Нужен телефон" }]}
                style={{ marginBottom: 0 }}
              >
                <div>
                  <FieldLabel>Телефон</FieldLabel>
                  <Input
                    size="large"
                    placeholder="+7 (999) 000-00-00"
                    className="dark-input"
                  />
                </div>
              </Form.Item>
            </FormGrid>

            <Form.Item name="email" style={{ marginBottom: 16 }}>
              <div>
                <FieldLabel>Email (необязательно)</FieldLabel>
                <Input
                  size="large"
                  type="email"
                  placeholder="you@mail.ru"
                  className="dark-input"
                />
              </div>
            </Form.Item>

            <Form.Item
              name="fleet"
              label={null}
              rules={[{ required: true, message: "Выберите тип" }]}
            >
              <div>
                <FieldLabel>Интересует</FieldLabel>
                <Select
                  size="large"
                  placeholder="Тип авто"
                  className="dark-select"
                  popupClassName="dark-select-dropdown"
                  options={[
                    { value: "passenger", label: "Легковой премиум" },
                    { value: "van", label: "Фургон / грузопассажирский" },
                    { value: "both", label: "И то и другое" },
                  ]}
                />
              </div>
            </Form.Item>

            <Form.Item name="comment">
              <div>
                <FieldLabel>Комментарий</FieldLabel>
                <Input.TextArea
                  rows={3}
                  placeholder="Город, срок аренды, вопросы…"
                  className="dark-input"
                />
              </div>
            </Form.Item>

            <Form.Item style={{ marginBottom: 0 }}>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
                style={{
                  height: 48,
                  fontFamily: "boon, sans-serif",
                  letterSpacing: "0.06em",
                  background: "linear-gradient(135deg, #62a1a8, #4a8f96)",
                  border: "none",
                  boxShadow: "0 12px 32px rgba(98, 161, 168, 0.35)",
                }}
              >
                Отправить
              </Button>
            </Form.Item>
          </Form>
        )}
      </FormCard>
    </Section>
  );
}

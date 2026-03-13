import styled from "styled-components";

export const Foot = styled.footer`
  margin-top: 2rem;
  padding: 1.5rem 0 2.5rem;
  border-top: 1px solid rgba(98, 161, 168, 0.15);
`;

export const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.8rem;
  color: rgba(240, 244, 245, 0.4);
`;

export const Links = styled.div`
  display: flex;
  gap: 1.25rem;
  a {
    color: rgba(98, 161, 168, 0.9);
    text-decoration: none;
  }
  a:hover {
    color: #8ec4ca;
  }
`;

import React from 'react';
import { Container, Wrapper, Row, Column, Link, Title, Icon, Mail, Contact} from './styles/footer';

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Wrapper = function FooterWrapper({children, ...restProps}) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Icon = function FooterIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};

Footer.Mail = function FooterMail({ children, ...restProps }) {
  return <Mail {...restProps}>{children}</Mail>;
};

Footer.Contact = function FooterContact({ children, ...restProps }) {
  return <Contact {...restProps}>{children}</Contact>;
};

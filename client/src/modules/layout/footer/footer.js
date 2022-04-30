import React from "react"
import PropTypes from "prop-types"
import { Container, Wrapper, Row, Column, Link, LocalLink, Title, Icon, Mail} from "./styles"

export default function Footer({children}) {
    return <Container>{children}</Container>
}

Footer.propTypes = {
    children: PropTypes.node.isRequired
}

Footer.Wrapper = function FooterWrapper({children}) {
    return <Wrapper>{children}</Wrapper>
}

Footer.Wrapper.propTypes = {
    children: PropTypes.node.isRequired
}

Footer.Row = function FooterRow({ children}) {
    return <Row>{children}</Row>
}

Footer.Row.propTypes = {
    children: PropTypes.array.isRequired
}

Footer.Column = function FooterColumn({children, social}) {
    return <Column social={social}>{children}</Column>
}

Footer.Column.propTypes = {
    children: PropTypes.array.isRequired,
    social: PropTypes.bool
}

Footer.Link = function FooterLink({children, href, iscontact}) {
    return <Link href={href} iscontact={iscontact}>{children}</Link>
}

Footer.Link.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string,
    iscontact: PropTypes.bool
}

Footer.LocalLink = function FooterLocalLink({ children, to, iscontact}) {
    return <LocalLink to={to} iscontact={iscontact}>{children}</LocalLink>
}

Footer.LocalLink.propTypes = {
    children: PropTypes.array.isRequired,
    to: PropTypes.string.isRequired,
    iscontact: PropTypes.bool
}

Footer.Title = function FooterTitle({children}) {
    return <Title>{children}</Title>
}

Footer.Title.propTypes = {
    children: PropTypes.string.isRequired,
}

Footer.Icon = function FooterIcon({className}) {
    return <Icon className={className}/>
}

Footer.Icon.propTypes = {
    className: PropTypes.string.isRequired
}

Footer.Mail = function FooterMail({children}) {
    return <Mail>{children}</Mail>
}

Footer.Mail.propTypes = {
    children: PropTypes.string.isRequired,
}
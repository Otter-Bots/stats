import { Container, Divider, Link } from "theme-ui";

export default function Footer() {
    return (
        <Container variant="copy">
            <p>
                &copy; Otter Bots 2023
                <br />
                Otter Bots is fiscally sponsored by <Link href="https://the.hackfoundation.org/">The Hack Foundation</Link>, a 501(c)(3) public non-profit.
            </p>
        </Container>
    )
}
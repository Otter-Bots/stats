import { Button, Grid, Link } from "theme-ui";

export default function Navigation() {
    return (
        <center>
            <Grid gap={2} columns={[7, '1fr 1fr 1fr 1fr 1fr 1fr 1fr']}>
                <Link href="#">Package Documentation</Link>
                <Link href="/manageBots">Manage Bots</Link>
                <Link href="#">Overall Statistics</Link>
                <Button variant="primary" onClick={() => document.location.href = "https://otterbots.dev"}>Otter Bots</Button>
                <Link href="#">API Documentation</Link>
                <Link href="#">View Source on Github</Link>
                <Link href="/">Home</Link>
            </Grid>
        </center>
    )
}
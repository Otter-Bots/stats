import { Button, Grid, Link } from "theme-ui";

export default function Navigation() {
    return (
        <center>
            <Grid gap={2} columns={[5, '1fr 1fr 1fr 1fr 1fr']}>
                <Link href="#">Manage Bots</Link>
                <Link href="#">Overall Statistics</Link>
                <Button variant="outline">Otter Bots</Button>
                <Link href="#">API Documentation</Link>
                <Link href="#">View source on Github</Link>
            </Grid>
        </center>
    )
}
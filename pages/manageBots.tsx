import { signIn, useSession } from 'next-auth/react'
import Layout from "@/components/layout";
import { Box, Button, Card, Checkbox, Input, Label, Message, Select, Text } from "theme-ui";
import { useState } from 'react';
import ListOfBots from '@/components/listOfBots';
// @ts-ignore
export default function ManageBots() {
    const { data: session, status } = useSession()
    const userEmail = session?.user?.email;
    // Create Bot on Submit function
    const createBotSubmit = (e: any) => {
        e.preventDefault();
        fetch(`/api/bots/${userEmail}/${e.target.botName.value}/create?avatar=${encodeURIComponent(e.target.botAvatar.value)}`).then((res) => {
            res.json().then((resJSON) => {
                console.log(resJSON.token)
                document.getElementById('createBot_tokenDisplay')!.innerHTML = `Your token is: ${resJSON.token} <br /> <bold>It Will Be Shown Only Once!</bold>`;
            });
        }).catch((err) => {
            console.log(err);
        });
    }
    // Get List of all Bots on button press
    const [listOfBots, setListOfBots] = useState<any>([]);
    const getListOfBotsFunction = () => {
        fetch(`/api/bots/${userEmail}/getListOfBots`).then((res) => {
            res.json().then((resJSON) => {
                setListOfBots(resJSON);
                console.log(resJSON.data)
            });
        }).catch((err) => {
            console.log(err);
        });
    }
    // Regenerate Bot Token on Submit function
    const regenerateBotSubmit = (e: any) => {
        e.preventDefault();
        fetch(`/api/bots/${userEmail}/${e.target.regenTokenListOfBots.value}/regenToken`).then((res) => {
            res.json().then((resJSON) => {
                console.log(resJSON.token)
                document.getElementById('regenerateToken_tokenDisplay')!.innerHTML = `Your token is: ${resJSON.token} <br /> <bold>It Will Be Shown Only Once!</bold>`;
            });
        }).catch((err) => {
            console.log(err);
        });
    }
    // Delete Bot on Submit function
    const deleteBotSubmit = (e: any) => {
        e.preventDefault();
        fetch(`/api/bots/${userEmail}/${e.target.deleteBotListOfBots.value}/remove`).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err);
        });
    }
    if (status == 'unauthenticated') {
        signIn();
    } else {
        return (
            <Layout>
                <Card variant="sunken">
                    <Text variant="headline">Create</Text>
                    <br />
                    <Box as="form" onSubmit={(e) => createBotSubmit(e)}>
                        <Label htmlFor="botName">Bot Name</Label>
                        <Input name="botName" id="botName" mb={3} />
                        <Label htmlFor="botAvatar">Bot Avatar URL</Label>
                        <Input name="botAvatar" id="botAvatar" mb={3} />
                        <Label>
                        Do you consent to your email being stored in our database? & your bot being publicly listed on our platform?
                            <Checkbox defaultChecked={false} required/>
                        </Label>
                        <Button variant='outline'>Submit</Button>
                    </Box>
                    <br />
                    <Message id="createBot_tokenDisplay">Your token is yet to be generated!, Complete the form above.</Message>
                </Card>
                <hr />
                <Card variant="sunken">
                    <Text variant="headline">Regenerate Token</Text>
                    <br />
                    <Button onClick={getListOfBotsFunction}>Get List of Bots</Button>
                    <Box as="form" onSubmit={(e) => regenerateBotSubmit(e)}>
                        <Label htmlFor="regenTokenListOfBots">Select Bot</Label>
                        <Select name="regenTokenListOfBots" id="regenTokenListOfBots">
                            <ListOfBots data={listOfBots.data} />
                        </Select>
                        <Button variant='outline'>Submit</Button>
                    </Box>
                    <br />
                    <Message id="regenerateToken_tokenDisplay">Your token is yet to be generated!, Complete the form above.</Message>
                </Card>
                <hr />
                <Card variant="sunken">
                    <Text variant="headline">Delete</Text>
                    <br />
                    <Button onClick={getListOfBotsFunction}>Get List of Bots</Button>
                    <Box as="form" onSubmit={(e) => deleteBotSubmit(e)}>
                        <Label htmlFor="deleteBotListOfBots">Select Bot</Label>
                        <Select name="deleteBotListOfBots" id="deleteBotListOfBots">
                            <ListOfBots data={listOfBots.data} />
                        </Select>
                        <Button variant='outline'>Submit</Button>
                    </Box>
                </Card>
            </Layout>
        )
    }
}
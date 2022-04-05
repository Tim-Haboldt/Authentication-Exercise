import React from "react"
import Page from "../../Components/Page/page"
import Box from "../../Components/Box/box"
import Text from "../../Components/Text/text"
import { defaultBorderColor } from "../../Utils/defaultColors"

const LoginPage = () => {
    return (
        <Page>
            <Box className="w-screen">
                <Box
                    className={`m-10 p-3 my-10 min-w-min w-2/5 ${defaultBorderColor} border flex-col`}
                >
                    <Text>E-Mail</Text>
                    <Text>Password</Text>
                </Box>
            </Box>
        </Page>
    )
}

export default LoginPage

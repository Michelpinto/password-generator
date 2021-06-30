import { useState } from "react";
import {
    CardContent,
    Title,
    PassW,
    Button,
    Text,
    Icon,
    Options,
    Option,
    FormDiv,
    Input,
} from "./CardStyles";
import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Checkbox Material-UI
import { withStyles } from "@material-ui/core/styles";
import { Checkbox, FormControlLabel } from "@material-ui/core";

const GreenCheckbox = withStyles({
    root: {
        color: "#3be291",
        "&$checked": {
            color: "#3be291",
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const Card = () => {
    const [password, setPassword] = useState("");
    const [passLength, setPassLength] = useState(4);
    const [includeLc, setIncludeLc] = useState(false);
    const [includeUp, setIncludeUp] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);

    const lc = "abcdefghijklmnopqrstuvwxyz";
    const up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "#$%&()*+<=>?@";
    const numbers = "0123456789";

    const createPassword = (charaterList) => {
        let password = "";
        const characterListLength = charaterList.length;

        for (let i = 0; i < passLength; i++) {
            const chIndex = Math.round(Math.random() * characterListLength);
            password = password + charaterList.charAt(chIndex);
        }
        return password;
    };

    const generatePassword = () => {
        if (!includeLc && !includeUp && !includeSymbols && !includeNumbers) {
            notify("Select one of them", true);
        }
        let characters = "";

        if (includeLc) {
            characters += lc;
        }

        if (includeUp) {
            characters += up;
        }

        if (includeNumbers) {
            characters += numbers;
        }

        if (includeSymbols) {
            characters += symbols;
        }

        setPassword(createPassword(characters));
    };

    const notify = (message, warning = false) => {
        if (warning) {
            toast.warn(message, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 1,
            });
        } else {
            toast.success(message, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    const copy = () => {
        const el = document.createElement("textarea");
        el.innerText = password;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        el.remove();
    };

    const handleCopy = (e) => {
        if (password === "") {
            notify("No password", true);
        } else {
            copy();
            notify("Password copied to clipboard! 🥳");
        }
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                transition={Zoom}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <CardContent>
                <Title>Password generator</Title>
                <FormDiv>
                    <PassW>
                        <h3>{password}</h3>
                    </PassW>
                    <Icon onClick={handleCopy}>
                        <i className="ri-clipboard-line"></i>
                    </Icon>
                </FormDiv>

                <Options>
                    <Option>
                        <Text>Password length</Text>
                        <Input
                            defaultValue={passLength}
                            onChange={(e) => setPassLength(e.target.value)}
                            type="number"
                            min="4"
                            max="20"
                            maxLength="2"
                        />
                    </Option>

                    <Option>
                        <Text>Include numbers</Text>

                        <FormControlLabel
                            style={{ margin: "0" }}
                            control={
                                <GreenCheckbox
                                    checked={includeNumbers}
                                    onChange={(e) =>
                                        setIncludeNumbers(e.target.checked)
                                    }
                                    name="checkedG"
                                />
                            }
                        />
                    </Option>

                    <Option>
                        <Text>Include symbols</Text>

                        <FormControlLabel
                            style={{ margin: "0" }}
                            control={
                                <GreenCheckbox
                                    checked={includeSymbols}
                                    onChange={(e) =>
                                        setIncludeSymbols(e.target.checked)
                                    }
                                    name="checkedG"
                                />
                            }
                        />
                    </Option>

                    <Option>
                        <Text>Include uppercase letters</Text>

                        <FormControlLabel
                            style={{ margin: "0" }}
                            control={
                                <GreenCheckbox
                                    checked={includeUp}
                                    onChange={(e) =>
                                        setIncludeUp(e.target.checked)
                                    }
                                    name="checkedG"
                                />
                            }
                        />
                    </Option>

                    <Option>
                        <Text>Include lowercase letters</Text>

                        <FormControlLabel
                            style={{ margin: "0" }}
                            control={
                                <GreenCheckbox
                                    checked={includeLc}
                                    onChange={(e) =>
                                        setIncludeLc(e.target.checked)
                                    }
                                    name="checkedG"
                                />
                            }
                        />
                    </Option>
                </Options>
                <Button onClick={generatePassword}>Generate password</Button>
            </CardContent>
        </>
    );
};

export default Card;

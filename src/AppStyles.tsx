import styled from "styled-components";

export const Container = styled.div`
    background-color:blue;
    color:white;

    span{
        font-weigth: bold;
        color:pink;
    }

    .link{
        color: #FFF;
    }
    .link:hover{
        color:#OOFFOO;
    }
`
type BotaoProps = {
    bg: string
    small?: boolean
}
export const Button = styled.button<BotaoProps>`
    font-size${(props) => props.small ? '15px' : '30px'}
    background-color:${(props) => props.bg}
`


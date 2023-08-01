import styled from 'styled-components';
import SignInHeader from '../../components/Header/SignInHeader';
import MainTitle from '../../commons/Title/SignIn/MainTitle';
import SubTitle from '../../commons/Title/SignIn/SubTitle';
import SignInContainer from '../../components/Wrapper/SignIn/SignInContainer';
import Input from '../../commons/Input/Input';
import BreakLine from '../../commons/Break/SignIn/BreakLine';
import Logo from '../../assets/kakakoLogo.svg';
import SignInFooter from '../../components/Wrapper/SignIn/SignInFooter';
import TextBox from '../../commons/Text/TextBox';
import TextBreakLine from '../../commons/Break/SignIn/TextBreakLine';
import Label from '../../commons/Label/Label';
import InputBox from '../../components/Wrapper/InputBox';
import StandardBtn from '../../commons/Button/StandardBtn';

const TopContainer = styled.div`
    width: 1280px;
    height: 720px;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 67px 436px;
    box-sizing: border-box;
    @media (max-width: 599px) {
        width: 360px;
        height: 800px;
        padding: 0;
        padding: 103px 0 147px 0;
        background: #fff;
    }
`;

const MainContainer = styled.div`
    width: 408px;
    height: 586px;
    padding: 40px;
    border-radius: 8px;
    background-color: #fff;
    box-sizing: border-box;
    box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.06);
    display: flex;
    flex-direction: column;
    @media (max-width: 599px) {
        width: 328px;
        height: 506px;
        padding: 0;
        box-sizing: content-box;
        box-shadow: none;
    }
`;

const LogoBox = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 8px;
`;

const SignIn = () => {
    return (
        <>
            <TopContainer>
                <MainContainer>
                    <SignInHeader marginbottom="24px">
                        <MainTitle>세상에 없던 이력서</MainTitle>
                        <SubTitle>나를 잘 표현한 이력서 멘토와 함께 작성해보세요</SubTitle>
                    </SignInHeader>
                    <SignInContainer height="164px" marginbottom="48px">
                        <InputBox>
                            <Label>이메일</Label>
                            <Input placeholder="이메일을 입력해주세요" />
                        </InputBox>
                        <InputBox>
                            <Label>비밀번호</Label>
                            <Input placeholder="비밀번호를 입력해주세요" />
                        </InputBox>
                    </SignInContainer>
                    <SignInContainer height="148px" marginbottom="40px">
                        <StandardBtn navigatePath="/signup" color="#FFF" background="#8644FF">
                            이메일로 로그인 또는 회원가입
                        </StandardBtn>
                        <BreakLine />
                        <StandardBtn color="#351C1B" background="#FBE54D">
                            <LogoBox src={Logo} alt="logo" /> 카카오로 3초만에 계속하기
                        </StandardBtn>
                    </SignInContainer>
                    <SignInFooter>
                        <TextBox>회원가입</TextBox>
                        <TextBreakLine />
                        <TextBox>이메일찾기</TextBox>
                        <TextBreakLine />
                        <TextBox>비밀번호 찾기</TextBox>
                    </SignInFooter>
                </MainContainer>
            </TopContainer>
        </>
    );
};

export default SignIn;

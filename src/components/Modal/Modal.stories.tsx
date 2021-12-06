import { CInput } from "@coreui/react";
import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import {
  ArgsTable,
  Canvas,
  Description,
  PRIMARY_STORY,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";
import { Meta, Story } from "@storybook/react";
import { useCallback, useEffect, useState, useMemo } from "react";

import Button from "../Button/Button";
import Modal, { Props as ModalProps } from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    docs: {
      // inlineStories: false,
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Canvas>
            {/* <Modal title="모달" show={true} closeOnBackdrop>
              기본 모달입니다.
            </Modal> */}
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6" className="m-0">
                      Dialog_sm_type1
                    </Typography>
                    <Typography className="mt-2">
                      (1) 취소/확인 button <br />
                      모달의 성격이 사용자의 선택을 필요로 하는 질문 형식일때
                      사용
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Template
                      aria-describedby="Dialog_sm_type1"
                      didicastButtonsInFooter={[
                        {
                          label: "취소",
                          color: "didicast-gray-5",
                          block: true,
                        },
                        { label: "확인", block: true },
                      ]}
                    >
                      <div className={`text-center mb-3`}>
                        업로드된 영상을
                        <br />
                        삭제하시겠습니까?
                      </div>
                    </Template>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6" className="m-0">
                      Dialog_sm_type2
                    </Typography>
                    <Typography className="mt-2">
                      (2) 확인 button <br />
                      모달의 성격이 사용자의 동작에 대한 한계를 알려줄때 사용
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Template
                      aria-describedby="Dialog_sm_type2"
                      didicastButtonsInFooter={[{ label: "확인", block: true }]}
                    >
                      <div className={`text-center mb-3`}>
                        업로드된 영상을
                        <br />
                        삭제하시겠습니까?
                      </div>
                    </Template>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6" className="m-0">
                      Dialog_sm_type3
                    </Typography>
                    <Typography className="mt-2">
                      (3) 부가 설명 텍스트
                      <br />
                      모달에 부가 설명이 필요할때 사용
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Template
                      aria-describedby="Dialog_sm_type3"
                      didicastButtonsInFooter={[
                        {
                          label: "취소",
                          color: "didicast-gray-5",
                          block: true,
                        },
                        { label: "확인", block: true },
                      ]}
                    >
                      <div className={`text-center`}>
                        업로드된 영상을
                        <br />
                        삭제하시겠습니까?
                      </div>
                      <div className={`text-didicast-gray-3 mt-3 text-center`}>
                        <Typography variant="body1">
                          모달 사용시 부가 설명이 필요한 경우에
                          <br />
                          텍스트 스타일은 이렇게 표기 됩니다.
                        </Typography>
                      </div>
                    </Template>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6" className="m-0">
                      Dialog_sm_type4
                    </Typography>
                    <Typography className="mt-2">
                      (4) 링크 버튼
                      <br />
                      모달에서 페이지 이동이 필요할때 사용
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Template
                      aria-describedby="Dialog_sm_type4"
                      didicastButtonsInFooter={[{ label: "확인", block: true }]}
                    >
                      <div className={`text-center`}>
                        추가 가능한 클래스가 없습니다.
                        <br />
                        클래스를 먼저 만들어주세요!
                      </div>
                      <div className={`text-didicast-gray-3 mt-3 text-center`}>
                        <Typography variant="body1">
                          클래스에 사용할 영상을 아직 업로드 하지 않으셨나요?
                          <br />
                          <a href="#void">영상 클라우드로 이동</a>
                        </Typography>
                      </div>
                    </Template>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6" className="m-0">
                      Dialog_sm_type5
                    </Typography>
                    <Typography className="mt-2">
                      (5) 정보 수집 요소
                      <br />
                      사용자의 동작으로 정보를 전달 받아 할때 사용
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Template
                      aria-describedby="Dialog_sm_type5"
                      title="영상 제목 수정"
                      didicastButtonsInFooter={[
                        {
                          label: "취소",
                          color: "didicast-gray-5",
                          block: true,
                        },
                        { label: "확인", block: true },
                      ]}
                    >
                      <Typography variant="body1">
                        영상 제목을 수정 하시겠습니까?
                        <br />
                        최대 50자까지 작성 가능합니다.
                        <CInput
                          className="mt-3"
                          style={{ height: "calc(2.5em + 0.75rem + 2px)" }}
                        />
                      </Typography>
                    </Template>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6" className="m-0">
                      Dialog_sm_type6
                    </Typography>
                    <Typography className="mt-2">
                      (6) 자동 종료
                      <br />
                      사용자 요청 동작이 완료 됨과 동시에 자동 종료 됨
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Template aria-describedby="Dialog_sm_type6">
                      <div className="d-flex flex-column align-items-center">
                        <CircularProgress
                          className="mb-4"
                          style={{
                            color: "#06b0d7",
                          }}
                          size={24}
                        />
                        <div className={`text-center mb-5`}>
                          수료증을 재 발행 중입니다.
                          <br />
                          잠시만 기다려주세요
                        </div>
                      </div>
                    </Template>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6" className="m-0">
                      Dialog_lg
                    </Typography>
                    <Typography className="mt-2">Large size</Typography>
                  </TableCell>
                  <TableCell>
                    <Template
                      aria-describedby="Dialog_lg"
                      size="lg"
                      title="멤버 추가"
                      didicastButtonsInFooter={[
                        {
                          label: "취소",
                          color: "didicast-gray-5",
                        },
                        { label: "확인" },
                      ]}
                      footerStyle={{ width: "auto" }}
                    >
                      <div className={`text-left mt-1`}>
                        모달의 내용을
                        <br />
                        자유롭게 작성하세요.
                      </div>
                    </Template>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Canvas>
          <ArgsTable story={PRIMARY_STORY} />
          <Stories includePrimary />
        </>
      ),
    },
  },
} as Meta;

const Template: Story<ModalProps> = ({
  "aria-describedby": describedby,
  footer,
  didicastButtonsInFooter: _didicastButtonsInFooter,
  ...args
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const didicastButtonsInFooter = useMemo(() => {
    const buttons = _didicastButtonsInFooter;
    if (buttons) {
      buttons[0].onClick = handleOpen;
    }

    return buttons;
  }, [_didicastButtonsInFooter, handleOpen]);

  useEffect(() => {
    if (!footer && !didicastButtonsInFooter && open) {
      (async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        handleOpen();
      })();
    }
  }, [footer, didicastButtonsInFooter, open, handleOpen]);

  return (
    <>
      <Button
        label={describedby}
        onClick={handleOpen}
        paddingSize="lg"
        variant="outline"
      />
      <Modal
        show={open}
        footer={footer}
        didicastButtonsInFooter={didicastButtonsInFooter}
        {...args}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  closeOnBackdrop: true,
  children: (
    <>
      <div className={`text-center mb-3`}>
        업로드된 영상을
        <br />
        삭제하시겠습니까?
      </div>
    </>
  ),
  didicastButtonsInFooter: [
    { label: "취소", color: "didicast-gray-5", block: true },
    { label: "확인", block: true },
  ],

  "aria-describedby": "Default dialog",
};

export const SingleConfirm = Template.bind({});
SingleConfirm.args = {
  closeOnBackdrop: true,
  children: (
    <>
      <div className={`text-center mb-3`}>
        업로드된 영상을
        <br />
        삭제하시겠습니까?
      </div>
    </>
  ),
  didicastButtonsInFooter: [{ label: "확인", block: true }],

  "aria-describedby": "SingleConfirm dialog",
};

export const AddFunction = Template.bind({});
AddFunction.args = {
  title: "영상 제목 수정",
  closeOnBackdrop: true,
  children: (
    <>
      <div className={`mb-n3`}>
        영상 제목을 수정하시겠습니까? <br />
        최대 50자까지 작성 가능합니다.
        <CInput
          className="my-3"
          style={{ height: "calc(2.5em + 0.75rem + 2px)" }}
        />
      </div>
    </>
  ),
  didicastButtonsInFooter: [
    { label: "취소", color: "didicast-gray-5", block: true },
    { label: "확인", block: true },
  ],

  "aria-describedby": "AddFunction dialog",
};

export const AutoClose = Template.bind({});
AutoClose.args = {
  children: (
    <>
      <div className="d-flex flex-column align-items-center">
        <CircularProgress
          className={`mb-4`}
          style={{ color: "#06b0d7" }}
          size={24}
        />
        <div className={`mb-5 text-center`}>
          수료증을 재발행중입니다.
          <br />
          잠시만 기다려주세요
        </div>
      </div>
    </>
  ),

  "aria-describedby": "AutoClose dialog",
};

export const LargeModal = Template.bind({});
LargeModal.args = {
  title: "멤버 추가",
  size: "lg",
  centered: true,
  style: { height: "700px" },

  children: (
    <div>
      <Typography>Children 영역</Typography>
    </div>
  ),
  didicastButtonsInFooter: [
    { label: "취소", color: "didicast-gray-5" },
    { label: "확인" },
  ],
  footerStyle: { width: "auto" },

  "aria-describedby": "Large Modal",
};

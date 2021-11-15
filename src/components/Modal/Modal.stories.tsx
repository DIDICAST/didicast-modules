import { CInput, CRow } from "@coreui/react";
import {
  CircularProgress,
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Theme,
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
                      <div className={`text-center mt-1`}>
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
                      <div className={`text-center mt-1`}>
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
                      <div className={`text-center mt-1`}>
                        업로드된 영상을
                        <br />
                        삭제하시겠습니까?
                      </div>
                      {/* <div className={`text-didicast-gray-3 mt-3 ${classes.modalSubtext}`}>
                      모달 사용시 부가 설명이 필요한 경우에<br/>
텍스트 스타일은 이렇게 표기 됩니다.
  </div> */}
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
      <div className={`text-center mt-1`}>
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
      <div className={`text-center mt-1`}>
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
          className="mt-4"
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
          className={`mt-3 mb-4`}
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

// export const NoTitle: Story<ModalProps> = () => {
//   const [modal, setModal] = useState({
//     twoButtons: false,
//     singleButton: false,
//     subText: false,
//   });
//   const classes = useStyles();
//   const handleOpen = useCallback(
//     (flg) => {
//       switch (flg) {
//         case "two":
//           setModal((prev) => ({ ...prev, twoButtons: !modal.twoButtons }));
//           break;
//         case "single":
//           setModal((prev) => ({ ...prev, singleButton: !modal.singleButton }));
//           break;
//         case "sub":
//           setModal((prev) => ({ ...prev, subText: !modal.subText }));
//           break;
//       }
//     },
//     [modal, setModal]
//   );
//   return (
//     <>
//       <CRow>
//         <div className="mx-3">
//           <Typography variant="h5" className="mb-2">
//             취소/확인 버튼
//           </Typography>
//           <Button label="취소/확인" onClick={() => handleOpen("two")} />
//         </div>
//         <div className="mx-3">
//           <Typography variant="h5" className="mb-2">
//             확인 버튼
//           </Typography>
//           <Button label="확인" onClick={() => handleOpen("single")} />
//         </div>
//         <div className="mx-3">
//           <Typography variant="h5" className="mb-2">
//             부가 설명 텍스트
//           </Typography>
//           <Button label="부가설명" onClick={() => handleOpen("sub")} />
//         </div>
//       </CRow>

//       <Modal
//         show={modal.twoButtons}
//         footer={
//           <Grid container spacing={2}>
//             <Grid item xs>
//               <Button
//                 label="취소"
//                 color="didicast-gray-5"
//                 onClick={() => handleOpen("two")}
//                 block
//               />
//             </Grid>
//             <Grid item xs>
//               <Button label="확인" block />
//             </Grid>
//           </Grid>
//         }
//       >
//         <div className={`text-center mt-1`}>
//           업로드된 영상을
//           <br />
//           삭제하시겠습니까?
//         </div>
//       </Modal>
//       <Modal
//         show={modal.singleButton}
//         footer={
//           <>
//             <Button
//               label="확인"
//               className="m-0"
//               block
//               onClick={() => handleOpen("single")}
//             />
//           </>
//         }
//       >
//         <div className={`text-center mt-1`}>
//           강의로 등록된 영상으로
//           <br />
//           삭제가 불가능합니다.
//         </div>
//       </Modal>
//       <Modal
//         show={modal.subText}
//         footer={
//           <>
//             <Button label="확인" block onClick={() => handleOpen("sub")} />
//           </>
//         }
//       >
//         <div className={`text-center mt-1`}>
//           추가 가능한 클래스가 없습니다.
//           <br />
//           클래스를 먼저 만들어주세요!
//           <div className={`text-didicast-gray-3 mt-3 ${classes.modalSubtext}`}>
//             클래스에 사용할 영상을 아직 업로드하지 않으셨나요?
//             <br />
//             <span className="text-didicast-blue">영상 클라우드로 이동</span>
//           </div>
//         </div>
//       </Modal>
//     </>
//   );
// };

// const ButtonTemplate: Story<ModalProps> = () => {
//   const [open, setOpen] = useState(false);
//   const classes = useStyles();
//   const handleOpen = useCallback(() => {
//     setOpen(!open);
//   }, [open, setOpen]);
//   return (
//     <>
//       <CRow>
//         <div className="mx-3">
//           <Typography variant="h5" className="mb-2">
//             Modal with Title
//           </Typography>
//           <Button label="모달 열기" onClick={handleOpen} />
//         </div>
//       </CRow>

//       <Modal
//         title="영상 제목 수정"
//         show={open}
//         footer={
//           <Grid container spacing={2}>
//             <Grid item xs>
//               <Button
//                 label="취소"
//                 color="didicast-gray-5"
//                 onClick={handleOpen}
//                 block
//               />
//             </Grid>
//             <Grid item xs>
//               <Button label="확인" block />
//             </Grid>
//           </Grid>
//         }
//       >
//         <div className={`mb-n3 ${classes.modalSubtext}`}>
//           영상 제목을 수정하시겠습니까? <br />
//           최대 50자까지 작성 가능합니다.
//           <CInput className="mt-3" />
//         </div>
//       </Modal>
//     </>
//   );
// };

// export const WithTitle = ButtonTemplate.bind({});

// export const AutoClose_: Story<ModalProps> = () => {
//   const [open, setOpen] = useState(false);
//   const classes = useStyles();
//   const handleOpen = useCallback(async () => {
//     setOpen(true);
//     await new Promise((resolve) => setTimeout(resolve, 2000));
//     setOpen(false);
//   }, [setOpen]);
//   return (
//     <>
//       <CRow>
//         <div className="mx-3">
//           <Typography variant="h5" className="mb-2">
//             Auto Close Modal
//           </Typography>
//           <Button label="모달 열기" onClick={handleOpen} />
//         </div>
//       </CRow>
//       <Modal show={open}>
//         <div className="d-flex flex-column align-items-center">
//           <CircularProgress
//             className={`mt-3 mb-4 ${classes.progressModalSpinner}`}
//             size={24}
//           />
//           <div className={`mb-5 text-center`}>
//             수료증을 재발행중입니다.
//             <br />
//             잠시만 기다려주세요
//           </div>
//         </div>
//       </Modal>
//     </>
//   );
// };

export const LargeModal: Story<ModalProps> = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleOpen = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);
  return (
    <>
      <CRow>
        <div className="mx-3">
          <Typography variant="h5" className="mb-2">
            Large Modal
          </Typography>
          <Button label="모달 열기" onClick={handleOpen} />
        </div>
      </CRow>
      <Modal
        title="멤버 추가"
        show={open}
        size="lg"
        centered
        style={{ height: "700px" }}
        footer={
          <Grid container spacing={2} style={{ width: "auto" }}>
            <Grid item>
              <Button
                label="취소"
                color="didicast-gray-5"
                onClick={handleOpen}
              />
            </Grid>
            <Grid item>
              <Button label="확인" />
            </Grid>
          </Grid>
        }
      >
        <div>
          <Typography variant="h4">Children 영역</Typography>
        </div>
      </Modal>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  modalSubtext: {
    fontSize: theme.typography.pxToRem(16),
    lineHeight: theme.typography.pxToRem(24),
    "& span": {
      textDecoration: "underline",

      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  progressModalSpinner: {
    color: "#06b0d7",
  },
}));

import { CRow } from "@coreui/react";
import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontSize: theme.typography.pxToRem(24),
    fontWeight: "bold",
    margin: `0 0 0 ${theme.typography.pxToRem(8)}`,
  },
  icon: {
    marginTop: theme.typography.pxToRem(2),
    fontSize: theme.typography.pxToRem(28),
  },
}));

export type TitleProps = {
  /** 주제 앞에 출력되는 이모지 */
  icon: string | string[];
  /** 주제 글 */
  title: string;
};

/**  `Title` 이모지와 함께 제목을 출력합니다.  */
const Title = ({ icon, title }: TitleProps) => {
  const classes = useStyles();

  return (
    <>
      <CRow className="mx-0 align-items-center">
        {icon && <span className={classes.icon}>{icon}</span>}
        <h4 className={classes.title}>{title}</h4>
      </CRow>
    </>
  );
};

export default Title;

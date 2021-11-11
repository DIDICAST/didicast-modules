import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
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
import DTitle, { TitleProps } from "./Title";

export default {
  title: "Components/Title",
  component: DTitle,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Canvas>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    디디캐스트 스튜디오에서 사용중인 {`<Title>`} 모음
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <DTitle title="수강현황" icon="📌" />
                    <DTitle title="패키지 관리" icon="📚" />
                    <DTitle title="패키지 만들기" icon="📚" />
                    <DTitle title="팀 관리" icon="👨‍👧‍👦" />
                    <DTitle title="팀 관리" icon="👨‍👧‍👦" />
                    <DTitle title="멤버 관리" icon="🧑🏻‍💻" />
                    <DTitle title="수강 현황" icon="💻" />
                    <DTitle title="영상 클라우드 관리" icon="📁" />
                    <DTitle title="클래스 관리" icon="✏️" />
                    <DTitle title="클래스 만들기" icon="✏️" />
                    <DTitle title="수강현황" icon="📌" />
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

const Template: Story<TitleProps> = (args) => <DTitle {...args} />;

export const Default = Template.bind({});
Default.args = { icon: "🇰🇷", title: "기본 타이틀" };

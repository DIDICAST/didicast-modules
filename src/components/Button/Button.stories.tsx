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
import * as BsIcons from "react-icons/bs";

import Button, { Props as ButtonProps } from "./Button";
import { ReactComponent as IconBiPlusLg } from "../../images/bi-plus-lg.svg";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          {/* <Primary /> */}
          <Canvas>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>스튜디오</TableCell>
                  <TableCell>디디캐스트</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th">Large</TableCell>
                  <TableCell className="py-5">
                    <Button
                      label="목록으로"
                      size="lg"
                      className="font-weight-bold"
                    />
                  </TableCell>
                  <TableCell className="py-5">
                    <Button
                      label="구매하기"
                      size="lg"
                      className="font-weight-bold"
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Default</TableCell>
                  <TableCell className="py-5">
                    <ul className="list-unstyled mb-n3">
                      <li className="mb-3">
                        <Button
                          label="영상 업로드"
                          IconComponent={<IconBiPlusLg />}
                        />
                      </li>
                      <li className="mb-3">
                        <Button label="디디캠 가져오기" color="secondary" />
                      </li>
                      <li className="mb-3">
                        <Button
                          label="취소"
                          color="didicast-gray-5"
                          paddingSize="lg"
                        />
                      </li>
                      <li className="mb-3">
                        <Button label="확인" paddingSize="lg" />
                      </li>
                      <li className="mb-3">
                        <Button
                          label="멤버 삭제"
                          variant="outline"
                          color="didicast-gray-3"
                          paddingSize="sm"
                        />
                      </li>
                      <li>
                        <Button label="멤버 내려받기" withExcelIcon />
                      </li>
                    </ul>
                  </TableCell>
                  <TableCell className="py-5 align-baseline">
                    <ul className="list-unstyled mb-n3">
                      <li className="mb-3">
                        <Button
                          label="수료증 내려받기"
                          IconComponent={<BsIcons.BsDownload />}
                          color="secondary"
                          className="font-weight-bold"
                          block
                        />
                      </li>
                      <li className="mb-3">
                        <Button
                          label="수강 하기"
                          color="didicast-red-3"
                          paddingSize="lg"
                          className="font-weight-bold"
                        />
                      </li>
                    </ul>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Small</TableCell>
                  <TableCell className="py-5"></TableCell>
                  <TableCell className="py-5">
                    <Button
                      label="신청 취소"
                      size="sm"
                      variant="outline"
                      color="didicast-deepblue-3"
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Extra small</TableCell>
                  <TableCell className="py-5"></TableCell>
                  <TableCell className="py-5">
                    <ul className="list-unstyled mb-n3">
                      <li className="mb-3">
                        <Button
                          label="라이브 입장하기"
                          size="xs"
                          color="didicast-red-5"
                          paddingSize="lg"
                        />
                      </li>
                      <li className="mb-3">
                        <Button label="수강하기" size="xs" />
                      </li>
                      <li className="mb-3">
                        <Button
                          label="바로가기"
                          size="xs"
                          variant="outline"
                          color="didicast-deepblue-3"
                          paddingSize="sm"
                        />
                      </li>
                    </ul>
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

const Template: Story<ButtonProps> = (args) => (
  <Button {...args} ref={undefined} />
);

export const Default = Template.bind({});
Default.args = { label: "Default", color: "primary" };

export const DefaultWithIconComponent = Template.bind({});
DefaultWithIconComponent.storyName = "Default with IconComponent";
DefaultWithIconComponent.args = {
  label: "Default with IconComponent",
  color: "primary",
  IconComponent: <IconBiPlusLg />,
};

export const Large = Template.bind({});
Large.args = { label: "Large", color: "primary", size: "lg" };

export const Small = Template.bind({});
Small.args = {
  label: "신청 취소", //"Small",
  color: "didicast-deepblue-3",
  size: "sm",
  variant: "outline",
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = { label: "Extra small", color: "primary", size: "xs" };

export const Outline = Template.bind({});
Outline.args = {
  label: "Outline",
  color: "didicast-gray-3",
  variant: "outline",
};

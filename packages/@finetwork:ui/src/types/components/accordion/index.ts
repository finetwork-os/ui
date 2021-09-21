import { ComponentProps, FC } from "react";
import {
  StyledAccordion,
  StyledContent,
  StyledTrigger,
} from "../../../styled-components/accordion";

import { CSS } from "@stitches/react/types/css-util";
import { ForwardRefComponent } from "@radix-ui/react-polymorphic";
import { KINDS } from "../../kind";

export type AccordionComponent = FC<
  ComponentProps<typeof StyledAccordion> & {
    kind?: KINDS;
  }
>;
export type AccordionContentComponent = FC<
  ComponentProps<typeof StyledContent>
>;

type AccordionTriggerCSSProp = { css?: CSS };
export type AccordionTriggerComponent = ForwardRefComponent<
  typeof StyledTrigger,
  AccordionTriggerCSSProp
>;

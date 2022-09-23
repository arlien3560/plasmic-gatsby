// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vPKbnjjwi8fuQ2UweyUVg
// Component: lGDkCv9W0IutQd
import * as React from "react";

import { Link, GatsbyLinkProps as LinkProps } from "gatsby";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import * as projectcss from "./plasmic_dark_saa_s_landing_page.module.css"; // plasmic-import: vPKbnjjwi8fuQ2UweyUVg/projectcss
import * as sty from "./PlasmicLogo.module.css"; // plasmic-import: lGDkCv9W0IutQd/css

import logopngVWjwzWj99DiWe4 from "./images/logopng.png"; // plasmic-import: vWjwzWj99DIWe4/picture
import lineBranchpng366BqUo2A9JNjx from "./images/lineBranchpng.png"; // plasmic-import: 366bqUO2A9JNjx/picture

export type PlasmicLogo__VariantMembers = {
  _50Opaque: "_50Opaque";
  smallLogo: "smallLogo";
};

export type PlasmicLogo__VariantsArgs = {
  _50Opaque?: SingleBooleanChoiceArg<"_50Opaque">;
  smallLogo?: SingleBooleanChoiceArg<"smallLogo">;
};

type VariantPropType = keyof PlasmicLogo__VariantsArgs;
export const PlasmicLogo__VariantProps = new Array<VariantPropType>(
  "_50Opaque",
  "smallLogo"
);

export type PlasmicLogo__ArgsType = {};
type ArgPropType = keyof PlasmicLogo__ArgsType;
export const PlasmicLogo__ArgProps = new Array<ArgPropType>();

export type PlasmicLogo__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultLogoProps {
  _50Opaque?: SingleBooleanChoiceArg<"_50Opaque">;
  smallLogo?: SingleBooleanChoiceArg<"smallLogo">;
  className?: string;
}

function PlasmicLogo__RenderFunc(props: {
  variants: PlasmicLogo__VariantsArgs;
  args: PlasmicLogo__ArgsType;
  overrides: PlasmicLogo__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        { [sty.root_50Opaque]: hasVariant(variants, "_50Opaque", "_50Opaque") }
      )}
      component={Link}
      href={`/`}
      platform={"gatsby"}
    >
      <p.PlasmicImg
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img, {
          [sty.img_50Opaque]: hasVariant(variants, "_50Opaque", "_50Opaque"),
          [sty.imgsmallLogo]: hasVariant(variants, "smallLogo", "smallLogo")
        })}
        displayHeight={"100%" as const}
        displayMaxHeight={"none" as const}
        displayMaxWidth={
          hasVariant(variants, "smallLogo", "smallLogo")
            ? ("50px" as const)
            : ("none" as const)
        }
        displayMinHeight={"0" as const}
        displayMinWidth={"0" as const}
        displayWidth={"100%" as const}
        src={
          hasVariant(variants, "smallLogo", "smallLogo")
            ? {
                src: lineBranchpng366BqUo2A9JNjx,
                fullWidth: 100,
                fullHeight: 100,
                aspectRatio: undefined
              }
            : {
                src: logopngVWjwzWj99DiWe4,
                fullWidth: 224,
                fullHeight: 50,
                aspectRatio: undefined
              }
        }
      />
    </p.PlasmicLink>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLogo__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLogo__VariantsArgs;
    args?: PlasmicLogo__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLogo__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLogo__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicLogo__ArgProps,
          internalVariantPropNames: PlasmicLogo__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicLogo__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLogo";
  } else {
    func.displayName = `PlasmicLogo.${nodeName}`;
  }
  return func;
}

export const PlasmicLogo = Object.assign(
  // Top-level PlasmicLogo renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicLogo
    internalVariantProps: PlasmicLogo__VariantProps,
    internalArgProps: PlasmicLogo__ArgProps
  }
);

export default PlasmicLogo;
/* prettier-ignore-end */
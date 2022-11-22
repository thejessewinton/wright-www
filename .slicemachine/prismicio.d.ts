// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for About documents */
interface AboutDocumentData {
    /**
     * Meta Title field in *About*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.meta_title
     * - **Tab**: Meta
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_title: prismicT.KeyTextField;
    /**
     * Meta Description field in *About*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.meta_description
     * - **Tab**: Meta
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_description: prismicT.KeyTextField;
}
/**
 * About document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<AboutDocumentData>, "about", Lang>;
/** Content for Galleries documents */
interface GalleriesDocumentData {
    /**
     * Meta Title field in *Galleries*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: galleries.meta_title
     * - **Tab**: Meta
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_title: prismicT.KeyTextField;
    /**
     * Meta Description field in *Galleries*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: galleries.meta_description
     * - **Tab**: Meta
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_description: prismicT.KeyTextField;
}
/**
 * Galleries document from Prismic
 *
 * - **API ID**: `galleries`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type GalleriesDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<GalleriesDocumentData>, "galleries", Lang>;
/** Content for Gallery documents */
interface GalleryDocumentData {
    /**
     * Meta Title field in *Gallery*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: gallery.meta_title
     * - **Tab**: Meta
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_title: prismicT.KeyTextField;
    /**
     * Meta Description field in *Gallery*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: gallery.meta_description
     * - **Tab**: Meta
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_description: prismicT.KeyTextField;
}
/**
 * Gallery document from Prismic
 *
 * - **API ID**: `gallery`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type GalleryDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<GalleryDocumentData>, "gallery", Lang>;
/** Content for Homepage documents */
interface HomepageDocumentData {
    /**
     * Main Title field in *Homepage*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.main_title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    main_title: prismicT.TitleField;
    /**
     * Featured Galleries field in *Homepage*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.featured_galleries
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    featured_galleries: prismicT.RelationField<"gallery">;
    /**
     * Meta Title field in *Homepage*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.meta_title
     * - **Tab**: Meta
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_title: prismicT.KeyTextField;
    /**
     * Meta Description field in *Homepage*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.meta_description
     * - **Tab**: Meta
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_description: prismicT.KeyTextField;
}
/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<HomepageDocumentData>, "homepage", Lang>;
/** Content for Navigation documents */
interface NavigationDocumentData {
    /**
     * Links field in *Navigation*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.links[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    links: prismicT.GroupField<Simplify<NavigationDocumentDataLinksItem>>;
}
/**
 * Item in Navigation → Links
 *
 */
export interface NavigationDocumentDataLinksItem {
    /**
     * Link field in *Navigation → Links*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.links[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
    /**
     * Label field in *Navigation → Links*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.links[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label: prismicT.KeyTextField;
}
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<NavigationDocumentData>, "navigation", Lang>;
export type AllDocumentTypes = AboutDocument | GalleriesDocument | GalleryDocument | HomepageDocument | NavigationDocument;
/**
 * Primary content in CallToAction → Primary
 *
 */
interface HireMeSliceDefaultPrimary {
    /**
     * Title field in *CallToAction → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: hire_me.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *CallToAction → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: hire_me.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Button Label field in *CallToAction → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hire_me.primary.button_label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    button_label: prismicT.KeyTextField;
}
/**
 * Default variation for CallToAction Slice
 *
 * - **API ID**: `default`
 * - **Description**: `HireMe`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HireMeSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HireMeSliceDefaultPrimary>, never>;
/**
 * Slice variation for *CallToAction*
 *
 */
type HireMeSliceVariation = HireMeSliceDefault;
/**
 * CallToAction Shared Slice
 *
 * - **API ID**: `hire_me`
 * - **Description**: `HireMe`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HireMeSlice = prismicT.SharedSlice<"hire_me", HireMeSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { AboutDocumentData, AboutDocument, GalleriesDocumentData, GalleriesDocument, GalleryDocumentData, GalleryDocument, HomepageDocumentData, HomepageDocument, NavigationDocumentData, NavigationDocumentDataLinksItem, NavigationDocument, AllDocumentTypes, HireMeSliceDefaultPrimary, HireMeSliceDefault, HireMeSliceVariation, HireMeSlice };
    }
}
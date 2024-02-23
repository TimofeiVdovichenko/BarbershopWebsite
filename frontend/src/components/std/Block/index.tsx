import Container from "../Container";
import styles from "./style.module.css"
import Button from '@/components/std/Button';
import ReactHtmlParser from 'react-html-parser'; 
import FormPopUp from "@/components/Layout/FormPopUp";
import { form } from "@/types/form";

export default function Block(
  {
    children, 
    options, 
    id, 
    className, 
    title,
    description
  } : { 
    children: React.ReactNode,
    options: {
      blockType?: "default" | "first",
      bgColor: "light" | "dark" | "gray",
      padding?: "top" | "bottom" | "both" | "both--xl",
      gradient?: "gr_top" | "gr_left",
      form?: {
        useForm: boolean,
        formText: string
        form_data: form
      },
      link?: {
        useLink?: boolean,
        link: string,
        linkText: string,
      },
    },
    id?: string,
    className? : string,
    title? : string,
    description? : string
  }) {

  let block_styles = styles[options.bgColor];
  let block_type = options.blockType ? options.blockType : "default";
  block_styles += " " + styles[block_type];
  options.padding && (block_styles += " " + styles[options.padding]);
  options.gradient && (block_styles += " " + styles[options.gradient]);
  className && (block_styles += " " + className);

  let header_styles = styles.info;
  let dsecription_styles = styles.description;
  if (block_type == "first") {
    header_styles += " " + styles.info_first;
    dsecription_styles += " " + styles.description_first;
  }

  let titleText;
  if (title) {
    if (block_type == "first") {
      titleText = <h1>{title}</h1>;
    } else {
      titleText = <h2>{title}</h2>;
    }
  }

  return (
    <div className={block_styles + " " + styles.block} id={id}>
      <Container blockType={block_type}>
          <div className={header_styles}>
            
            {title && titleText}

            {description && <div className={dsecription_styles}> { ReactHtmlParser (description) } </div>}

            {((options.form && options.form.useForm) || (options.link && options.link.useLink)) &&
                <div className={styles.buttons}>
                  {options.form?.useForm && <FormPopUp button={{
                text: options.form?.formText,
                type: "primary"
              }} form={options.form.form_data} curr_lang={""}/>}
                  {options.link?.useLink && <a href={options.link.link}><Button style="secondary">{options.link.linkText}</Button></a>}
                </div>
            }

          </div>
        {children}
      </Container>
    </div>
  )
}
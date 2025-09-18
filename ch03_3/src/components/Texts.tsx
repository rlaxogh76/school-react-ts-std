import type {FC, DetailedHTMLProps, HTMLAttributes} from 'react'
import {makeClassName} from './textUtil'

// P tag의 모든 속성
type TextProps = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>

export type TitleProps = TextProps & {
  numberOfLines?: number
}

export type SubtitleProps = TitleProps & {} // Title과 속성 동일
export type SummaryProps = TitleProps & {} // Title과 속성 동일
export type ParagraphProps = TitleProps & {} // Title과 속성 동일

// Title, Subtitle, Summary, Paragraph 컴포넌트 생성
export const Title: FC<TitleProps> = ({className: _className, numberOfLines, ...props}) => {
  const className = makeClassName(`font-bold text-5xl text-center whitespace-pre-line`, _className, numberOfLines)
  return <p {...props} className={className} />
}

export const Subtitle: FC<SubtitleProps> = ({className: _className, numberOfLines, ...props}) => {
  const className = makeClassName(`font-bold text-3xl text-center whitespace-pre-line`, _className, numberOfLines)
  return <p {...props} className={className} />
}

export const Summary: FC<SummaryProps> = ({className: _className, numberOfLines, ...props}) => {
  const className = makeClassName('font-sm whitespace-pre-line', _className, numberOfLines)
  return <p {...props} className={className} />
}

export const Paragraph: FC<ParagraphProps> = ({className: _className, numberOfLines, ...props}) => {
  const className = makeClassName('font-normal text-base whitespace-pre-line', _className, numberOfLines)
  return <p {...props} className={className} />
}

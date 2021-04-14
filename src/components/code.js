import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import dracula from 'prism-react-renderer/themes/github'
import Confetti from 'react-dom-confetti'

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: '10px',
  height: '10px',
  perspective: '500px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
}

const copyToClipboard = str => {
  const el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}

const Wrapper = props => <div style={{ position: 'relative' }} {...props} />

const ConfettiWrapper = props => (
  <div style={{ position: 'absolute', top: 0, right: 0 }} {...props} />
)

const Text = props => (
  <p
    style={{
      color: '#E2E8F0',
      fontSize: '14px',
      fontFamily: 'sans-serif',
      lineHeight: '1',
      margin: 0,
    }}
    {...props}
  />
)

const Button = props => (
  <button
    style={{
      border: '1px solid #4777c0',
      boxShadow: 'none',
      textDecoration: 'none',
      position: 'absolute',
      top: 0,
      right: 0,
      margin: '1rem',
      padding: '2px 6px',
      borderRadius: '2px',
      cursor: 'pointer',
      color: '#4777c0',
      fontSize: '12px',
      textTransform: 'uppercase'
    }}
    {...props}
  />
)

export const Code = ({ codeString, children, language, ...props }) => {
  const [isCopied, setIsCopied] = React.useState(false)

  if (props['react-live']) {
    return (
      <LiveProvider code={codeString} noInline={true}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  } else {
    return (
      <Wrapper>
        <Highlight
          {...defaultProps}
          code={codeString}
          language={language}
          theme={dracula}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={className}
              style={{
                ...style,
                padding: '2rem',
                position: 'relative',
              }}
            >
              <Button
                onClick={() => {
                  copyToClipboard(codeString)
                  setIsCopied(true)
                  setTimeout(() => setIsCopied(false), 3000)
                }}
              >
                {isCopied ? 'Copied!' : 'Copy'}
              </Button>

              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })} style={style}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
        <ConfettiWrapper>
          <Confetti active={isCopied} config={config} />
        </ConfettiWrapper>
      </Wrapper>
    )
  }
}

import React from 'react'
import { render, fireEvent } from '../testUtils'
import { Home, getStaticProps } from '../../pages/index'
import { InferGetStaticPropsType } from 'next'

describe('Home page', () => {
  it('matches snapshot', async () => {
    const { props } = (await getStaticProps({})) as HomeStaticProps
    const { asFragment } = render(<Home {...{ ...props }} />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('clicking button triggers alert', async () => {
    const { props } = (await getStaticProps({})) as HomeStaticProps
    const { getByText } = render(<Home {...{ ...props }} />, {})
    window.alert = jest.fn()
    fireEvent.click(getByText('Test Button'))
    expect(window.alert).toHaveBeenCalledWith('With typescript and Jest')
  })
})

type HomeStaticProps = {
  props: InferGetStaticPropsType<typeof getStaticProps>
  revalidate: boolean | number
}

import * as React from 'react'

type Tabs = {
  selectedValue?: string
  setSelectedValue?: React.Dispatch<React.SetStateAction<string>>
}

export const TabsContext = React.createContext<Tabs>({})

export function TabsProvider({
  defaultValue,
  children,
}: {
  defaultValue: string
  children: React.ReactNode
}) {
  const [selectedValue, setSelectedValue] = React.useState(defaultValue)
  return (
    <TabsContext.Provider value={{ selectedValue, setSelectedValue }}>
      {children}
    </TabsContext.Provider>
  )
}

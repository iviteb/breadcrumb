import React, { FC } from 'react'
import { useSearchPage } from 'vtex.search-page-context/SearchPageContext'
import { SearchBreadcrumb as SearchBreadcrumbStructuredData } from 'vtex.structured-data'

import BaseBreadcrumb, { NavigationItem } from '../BaseBreadcrumb'

interface Props {
  showOnMobile?: boolean
  homeIconSize?: number
  caretIconSize?: number
}

const SearchBreadcrumb: FC<Props> = ({
  showOnMobile,
  homeIconSize,
  caretIconSize,
}) => {
  // We do not apply our logic if we are in the search page
  let isInSearch = false

  const { searchQuery } = useSearchPage()
  isInSearch = searchQuery?.facets?.queryArgs?.map?.includes('ft')

  const breadcrumb: NavigationItem[] =
    searchQuery?.data?.productSearch?.breadcrumb ??
    searchQuery?.data?.facets?.breadcrumb ??
    []

  return (
    <>
      <SearchBreadcrumbStructuredData breadcrumb={breadcrumb} />
      <BaseBreadcrumb
        breadcrumb={breadcrumb}
        showOnMobile={showOnMobile}
        categories={[]} // unused prop, its OK
        homeIconSize={homeIconSize}
        caretIconSize={caretIconSize}
        isInSearch={isInSearch}
      />
    </>
  )
}

export default SearchBreadcrumb

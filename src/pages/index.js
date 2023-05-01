import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button, Flex } from '@mantine/core'
import CardArticle from '@/components/CardArticle'
import { useEffect } from 'react'
import { DataTable } from 'mantine-datatable';
import companies from '@/data/companies.json';
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  useEffect(()=>{
    
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(console.log);
            
  },[])
  
  return (
    <>
      <Head>
        <title>Example project for TOT</title>
        <meta name="description" content="Example project for TOT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <DataTable
            columns={[{ accessor: 'name' }, { accessor: 'streetAddress' }, { accessor: 'city' }, { accessor: 'state' }]}
            records={companies}
          />
        </Layout>
      </main>
    </>
  )
}

import { useState, useEffect } from 'react'

import { copy, linkIcon, loader, tick } from '../assets'

import { useLazyGetSummaryQuery } from '../services/article'

import { TypeAnimation } from 'react-type-animation';

const Demo = () => {

    const [article, setArticle] = useState({
        url: '',
        summary: ''

    })

    const [allArticles, setAllArticles] = useState([]);
    const [copied, setCopied] = useState("");

    const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

    useEffect(() => {
        const articlesFromLocalStorage = JSON.parse(localStorage.getItem('articles')
        );
        if(articlesFromLocalStorage) {
            setAllArticles(articlesFromLocalStorage);
        }
    }, []);

    const spineSubmit = async (e) => {
        e.preventDefault();
        const { data } = await getSummary({articleUrl: article.url });

        if(data?.summary) {
            const newArticle = { ...article, summary: data.summary };
            const updatedAllArticles = [newArticle, ...allArticles];
            
            setArticle(newArticle);
            setAllArticles(updatedAllArticles);
        
            console.log(newArticle);
            
            localStorage.setItem('articles', JSON.stringify(updatedAllArticles));
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await getSummary({articleUrl: article.url });

        if(data?.summary) {
            const newArticle = { ...article, summary: data.summary };
            const updatedAllArticles = [newArticle, ...allArticles];
            
            setArticle(newArticle);
            setAllArticles(updatedAllArticles);
        
            console.log(newArticle);
            
            localStorage.setItem('articles', JSON.stringify(updatedAllArticles));
        }
    }

    const handleCopy = (copyUrl) => {
      setCopied(copyUrl);
      navigator.clipboard.writeText(copyUrl);
      setTimeout(() => setCopied(false), 3000); 
    };

  return (
    <section className='mt-16 w-full max-w-xl'>
        <div className='flex flex-col gap-2 w-full'>
            <form className='relative flex justify-center items-center'
                onSubmit={handleSubmit}>

                <img src={linkIcon} alt="link_icon" className='absolute left-0 my-2 ml-3 w-5' />

                <input type="url"
                        placeholder='Plak hier de URL'
                        value={article.url}
                        onChange={(e) => setArticle({...article, url: e.target.value})}
                        required
                        className='url_input peer' 
                        />

                <button type='submit' className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'>&#8629;</button>
            </form>
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
                {allArticles.map((item, index) => (
                    <div key={`link-${index}`}
                        onClick={() => setArticle(article)}
                        className='link_card'
                    >
                        <div className="copy_btn" onClick={()=> handleCopy(item.url)}>
                            <img src={copied === item.url ? tick : copy} alt="copy_icon" className='w-[40%] h-[40%] object-contain' />
                        </div>
                        <p className='flex-1 font-satoshi truncate text-sm text-purple-700'>
                            {item.url}
                        </p>
                    </div>
                ))}
            </div> 
        </div>
        <div className='my-10 max-w-full flex justify-center items-center'>
        {isFetching ? (
          <img src={loader} alt='loader' className='w-20 h-20 object-contain' />
        ) : error ? (
          <p className='font-inter font-bold text-black text-center'>
            Well, that wasnt supposed to happen...
            <br />
            <span className='font-satoshi font-normal text-gray-700'>
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className='flex flex-col gap-3'>
              <h2 className='font-satoshi font-bold text-gray-600 text-xl'>
                Samenvatting van het <span className='purple_gradient'>Artikel</span>
              </h2>
              <div className='summary_box w-full'>
                <p className='font-inter font-medium text-sm text-gray-700'>
                <TypeAnimation
                  sequence={[
                    article.summary,
                    1000,
                  ]}
                  speed={100}
                  >
                  
                </TypeAnimation>
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  )
}

export default Demo
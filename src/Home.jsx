 import React, { useState, useEffect } from 'react';

function Home() {
  const [chartComponents, setChartComponents] = useState(null);
  const [iconComponents, setIconComponents] = useState(null);

  useEffect(() => {
    Promise.all([
      import('recharts'),
      import('react-icons/bs')
    ]).then(([recharts, bsIcons]) => {
      setChartComponents(recharts);
      setIconComponents(bsIcons);
    }).catch(error => {
      console.error('Error loading dynamic imports:', error);
    });
  }, []);

  if (!chartComponents || !iconComponents) {
    return <div>Loading...</div>;
  }

  const { BarChart, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } = chartComponents;
  const { BsFacebook, BsTwitter, BsInstagram, BsTiktok } = iconComponents;

  const data = [
        {
          name: 'Jan',
          facebook: 4000,
          instagram: 2200,
          tiktok: 240,
          x: 2420,
          amt: 2400,
        },
        {
          name: 'Feb',
          facebook: 3000,
          instagram: 1298,
          tiktok: 398,
          x: 1329,
          amt: 2210,
        },
        {
          name: 'March',
          facebook: 2000,
          instagram: 9200,
          tiktok: 9900,
          x: 960,
          amt: 2290,
        },
        {
          name: 'April',
          facebook: 2780,
          instagram: 3208,
          tiktok: 308,
          x: 393,
          amt: 2000,
        },
        {
          name: 'May',
          facebook: 1890,
          instagram: 4200,
          tiktok: 480,
          x: 450,
          amt: 2181,
        },
        {
          name: 'June',
          facebook: 2390,
          instagram: 3800,
          tiktok: 300,
          x: 330,
          amt: 2500,
        }
      ];

      return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>Total Followers</h3>
            </div>
    
            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Facebook</h3>
                        <BsFacebook className='card_icon'/>
                    </div>
                    <h1>300</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>X</h3>
                        <BsTwitter className='card_icon'/>
                    </div>
                    <h1>12</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Instagram</h3>
                        <BsInstagram className='card_icon'/>
                    </div>
                    <h1>33</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>TikTok</h3>
                        <BsTiktok className='card_icon'/>
                    </div>
                    <h1>42</h1>
                </div>
            </div>
            <div className='main-title'>
                <h3>Followers Per Month</h3>
            </div>
    
            <div className='charts'>
                {/* <ResponsiveContainer width="100%" height="100%">
                <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="fb" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer> */}
    
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="facbook" stroke="#316FF6" />
                    <Line type="monotone" dataKey="x" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="instagram" stroke="#d62976" />
                    <Line type="monotone" dataKey="tiktok" stroke="#00f2ea" />
                    </LineChart>
                </ResponsiveContainer>
    
            </div>
        </main>
      )
    }


export default Home;
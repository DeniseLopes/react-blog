import React from 'react';
import './style.css'
import '../../bootstrap.min.css'

const Conteudo = () => (
    <div classNameName="container">
        <div className="row d-flex justify-content-center">
            <div className="col-lg-10 coll ">
                <div className="cardbox shadow-lg bg-white">
                    <div className="cardbox-heading w-100">
                        <div className="dropdown    float-right">
                            <button className="btn btn-flat btn-flat-icon" type="button" data-toggle="dropdown" aria-expanded="false">
                                <em className="fa fa-ellipsis-h"></em>
                            </button>
                            <div className="dropdown-menu dropdown-scale dropdown-menu-right" role="menu" >
                                <a className="dropdown-item" href="#">Hide post</a>
                                <a className="dropdown-item" href="#">Stop following</a>
                                <a className="dropdown-item" href="#">Report</a>
                            </div>
                        </div>
                        <div className="media m-0">
                            <div className="d-flex mr-3">
                                <img className="img-fluid rounded-circle" src="http://2.bp.blogspot.com/-Slm3RfTjnkA/VQSPm13eeUI/AAAAAAAAAFE/hoUzxKI7nXA/s1600/kalleo.png" alt="User" />
                            </div>
                            <div className="media-body">
                                <p className="m-0">Kalleo Hipolito</p>
                                <small><span><i className="icon ion-md-pin"></i> Nairobi, Kenya</span></small>
                                <small><span><i className="icon ion-md-time"></i> 10 hours ago</span></small>

                            </div>
                        </div>
                    </div>

                    <div className="cardbox-item">
                        <p className="descricaoPost">Salve quebrada</p>
                        <img className="img-fluid imagePost" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUXFxcXGBcVFRUVFhUXFhgXGBgVGBcYHSggGBolGxUYITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0lHyUtLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYHAQj/xABKEAABAwIDBAUHCQYEBAcAAAABAAIRAyEEEjEFBkFREyJhcYEHMnKRobHBFCNCUmJzstHwJDM0Q4KSFaLC4SVTVPEWFzWTs9LT/8QAGQEAAgMBAAAAAAAAAAAAAAAAAQMAAgQF/8QAKhEAAgICAgICAQEJAAAAAAAAAAECEQMxEiEEQSIyYRMFBkJRcYGhseH/2gAMAwEAAhEDEQA/AO3yvQV6vIUIKEO2wf3Y+38D+aJITtp/XpN7SfZA96DIfPu8X72t99U/G5A6vHvRvb5+dq/ev/GUGqjXvUYYj8SLBVgFaxOgVdipHQyez00T2Lzoj2K++mm9GhyBxKQpHsU2HwTnHKACUd2TsZ1S4Ai1zpJ4aXWsp4FlBhAiSLCCS7j1osBPO/JBTt0i6x9WzHYbdiq6CIuCRpwtEmyirbNyML3dHE5JzEkEG9hxsUV2ntCo7M11ywS76LWydARcy0i3Ys/jXCIYwtDNTJuHRc3gepM4lXXoJ4AUrNdVp30PWtNpPrRxm59ZwljqLu5xWGqOgWBAOl+Ij4LS7rb1fJTlc3NTIFwbt48UmcHtBVB+juXXA/l+sp53Or8qfrK2Ox9qU69MVKZseeo71fBSLYDnrtzq8aM/uUJ3TxH1W/3Lo9Q2VZz0OTQUc6o7tVzMNbb7Ss7T3IxDKTX5WmTwfcT3ha7BO87vR/bs/Jm97U/D8rsXOTRx/Abr16lXogwZom7hEd6ZtbdSvhXCpVaA13VBDgbwSt/uuf213ofFe+VL+Hp/ej8Lk/iqbKKTbORwruCHWHeqnFXsELhZp6Gx2J463ifer79B3H4KlVb1j3n3q6Tp3fkitID2AsiSs5Uleih9MJJJJ5BIXtrzqXpH3f8AZFEJ20OtSP2j7h+RUZD5622ZqVfvX/jKD1uPei+2fPqfeO/EUHq8e9BhiT4nzQq7NVYxHmhV2KkdDJbCsIhsXZRqvNuq25kxb8+xDS5dE3S2aadFrqgDWkFxBFySbDn5oHtWfI6Q7HG2T1qYosa6Oq1uaIENA4m3IDv7Lxid4trOrEXDBEgXJN9XAcTBtEad60e9G1MjQxuTo562a4AFw0cOBMcwufY3EiAGyXuMude5OjRHL4diZijSJml6LFFzchNrmw5kQXO9yqY+sMxuDygz7teBRzC7vYp1NvzRylsj6xniO23GJWYxlFzHFrmlpBgg6g8inJpiZRaVtDG1Ytw1jt4KWk8TpqqhKcH8EaKJnQvJxtHJW6MugPFm8JHxhdPBXz/SebQbgCP14+1dg3Mx76uFYXwXC0jUgaE9qx5Y07G7D9V1lVc6ylqmyqk2SrIivgD53etHtz+Gb4LNbO0d3rTbb/h2+C1ePtiMpl92D+2u9D4p3lUPzFL73/S5Q7sv/bnegfeo/LBPyejBg9L/AKXLS18WLjs5t0RnRXMHSOYW4oIXVfrKxh31pEOWWcOtmmOwtVpnMbcT71YJ07vyQM16+Y35+9eipXt3Kyj0Uex+Z3IpKr0tZJW4go+p0kkk0AkL21/K9P4FFEM2z/L9P/SVCHz1vDUb0j8umbuuLO9soFV+KKbYd13+m78RQ1zZnxPquqsMSXEeaFAxTVzYKTZ+CLyTo1rcxJ5TAjmZOnYVROkMls2G52xRVearvNZEAt84m/rAlbnaNcU25myABcWsRpp3qHYmGbSaGU/oQHx9ctnrEjwPchm9mKDWQ52Vv0joIuBbUm0duqxcuUjfCNROf7xYwOqZXyQSHGDzuADxsQPEqtu1sl2IxlOmIiQ4zcZRcwqmNqB7+rYam0CZ0HqWl3MpOc92Tq1BLRfKTABc2YsdR3rXOXCFmbHH9TIdW2iw029WBA0n4Lk29gFRxLwJ5hR7W2lWpYjo6BrjMR83VE3PAdncqu33VaLgK7Yc4BwEg2KzcJc00a3kj+m4v/hnK1GE2i1T1qmY6LxzI0HHityfXZzZJX0WsG0l0c85HbAj4ewrceTXaxDzhnCYkgi+husfgG5DM6T4NNp8Z9qLbl4inRrhzhcjqxJiQZ9yzzd2N49HXawsqM2Vk1wWShzsS2DdZ3sqhbONnd60+3T+zt8FktlVgWug8Vqd4f4ZkcwtXj7YjKZXddw+Xu9D4p/lbI+T0vvf9Lk3demPlzj9j4pnlgHzFH7w/hK0v6sXHZy1wU2HfcKk9qkoNuFnkujTFlwVOsfH3qcVRb0UNLbkd6jdPPgrKJVvsv5gkheY80keILPrFJJNfNo8UwqNNO8ybcOHeg+06TG1KYGpL3ESSb5b/rkjaD7XjpKZEfSBNp4QPeoBo+ddqee70z7yqbHQ18d3g43/AC8e1WdpHrO9M+8qhni/bccxyKrItAmrHqhENiVqufqknRzhc9UEXtwmOy6g+S54ym17nhpr4FbHc3Y56Q1zTLWCnDGyA5xEdYg2dNjeJJ0SZSXFmhRuRsMGMrQ2HEMjzxDpIlwJFiJi6wW92KaH6znm0GGt+k6eLvz7Fs9rYktpsL32OaXEE2a4AZstw0aEg8VisdUBLqj4cGyW075RmEtv9FnVcbXsdLTkxfbs2z+tIzDsOKTntdBLCSQDYkTAB43hG9xS0kBxIl5JItwvfgs1ja5eXOcesSS48ySPYrm62Ly1cvA+9a80eWNmXx5qOVHW8DXoir1RSpjM1ofVJzVL9YNeQdBoOJ9awPlTxDH405CCGta0kGRI19soxtDeNzKRo1KL2ZhGYuYARpLYnN61g6NE1ajotqbukAa3d8UvEmlb9GjyX3S9jcLhzrYDSXEATyuvalPNUe6bSTJt26c44KarUb1WhsgGLWzidY4G5vyhedGASH6U8w5XEn4+wJt+zJS0eV61pFi+Qe78uSjwlcgiCQRoZ4cuxVTVJKfVF8w1VuPVFOXs6ju1tYVaGUul7QZb2Tqo69SZF1ldz8Y8VgABBDg7hAic098BanE1om3BZZRplmVtm4mtTkBoIJXTNsmcMw93uXPcHXaRK6Bton5KyPsrT477Znyoy+6n8e/0Pim+WE/MUfvD+FyfurbHO9D4pvlgHzFH7w/hctD+oqOzk7wpMMOsExykw/nBZ5aNMdnjxc+K9y8+SeBc+PvXrm/hVvRV7K+UJJZUkbAfUjKgT86H9JCkbVVwF7Mg+2anzlFvpnS1so+JV4VEM2wfnaRn6wjwBJj1esKEPnbaB6x9M+9UH/FXceesfSPvKWzMOxzs1Sejabxq48GDvi54AHsUq2RaNTutsaA2tVMNN2tIPC2cjiOUfBHX4+m5rsrmU6cxeZJaLvAsZjjxiOAWTxm3XVM4sGxAjSPqAePsXuJxFQsoscQKTY6QuDRDSZLZ1mOQ4wk58SUTThyfIK7W2mxzTAmxbSL8wHRnS51HVJg8SPHMbWq5WZRHWgF2ri0SQ3WI63Iaeu1th3VfDeqCwAO6rmHV2VosJIuJMA+oEW5iLk8glYoV2NyzvorVotB4eq5smYeplcD2+xWqWG6Q+c1pvAM6DuB5cVJhdmhz4L4aASTHWMCZDRMjjPJaG1XZlp3aNH/iddwYAWVGiSA8WaIgucdAOMqhjarWB0lvWgPLJaHT9FrYsBzi+ZU6VRrWljBJcILico49UaCNJJ7Y4FVqnWeXVH2JuQA6T9kCwHuSFA1TzuSomouMdMWmzsrYgAEaW46hVMTWPWbMjMTP1jzMpYyvLpDnRwnzonUxxOviqrnJ0Y+2ZpT9CDlM2odOfD8lXXrXK7QtM1e6+ys5FRzjDTIANyQePILVYmqSCIWP3ZxDg4X7D46TzWq2g4c1jyXy7Heh2CAhdH2t/CM7m+5czwdcQuk7Vf8AslPuan4NsRl0ZjdN8453oH3r3yw/uaH3h/CVBuzXjaBH2D70/wAsFT5qgPtn8JWlroVF9nLHJ+Fu4KJzlLhnXCzy0aY7JA6CZ7fenu7OSruNz+uKma+B4Ioq9kWZySmzj9QkjSB2fQ0ynief6+KSa4qxCUFDNqu+fo6aP7+HsREIZtX95SPpe4/rxUIfPuNPWPpH3qLFPLcrBwGY97v9oHgiey8D0tXrea0yZtJ5fr4oTiQX1CQLk6eOitVdgRYw2HfVc2myJhxvYQAXOce4A+pdBwu7tctZ0VIjIJY6ocohxDhmMguILQdJJdwDQpvJbsZuV1YhjjIaH+dEXeBIi1hab8bFb6pWzgkeaNO3tXP8nN3Ru8fHSs5FtbdPEvcTlYTP/NaXO7YdAB7JWU2rQq0qkVGPYTMZtI7DoR3LqO8FXK6ZWX2u5tdppuudWk8DySsPku1a6G5cC9Psw3Snmb+1Pa8gRMeJFtUyvSLHQUwldPpnN0SuPEkdgSqVBoPWoUlKJY5zpTUX3br0WOcarOkcQGsZAILnTck2F4HihCifdEerEnNCQCc1EAa3YeOmLT9IW72390rWimCsDs+rlqUz9tvqmD71uHVyDCzZl8rGwfRK2kF0XaF8DT7mrnBMhdAqu/4fT7mpnj7YrMZbdb/1Iz9Q/BTeWQ9TD+m78Kg3Xd/xL+g/BS+WLzcP6bvwrTL6iY7OXvKmwsyFXe8TCmoG4WeWjVHY52p8U8t9yj4nxUmb3IlWRSknJKAPpIhJOSKsQahG2qwbUpOcYaBUcSTYAAIs8rmPlP3gHSDDUzdgmoRzdBDPcT3hRK2QyGId0bDl5Ge88fb7FnqFfKXGLwQDyniO3ly1VyvUJaZPghhTJAR9BbGwAoYWjhma5WtJ5ufJc7x6zvFHqTGSaY0aI9WpWf3TxYq0aVcz+5FQzwc5oZA/tJ8VewFfKyo8/VPrOi4jl8+/ydRRuPRzvbWLzVK7ftW8As90kmVdxp+dd2k+1DTZxCOOPQZy7KO18OCC7jr4jX2e5BFpNqEZfEe9ZtdDx23EwZ1UhJJJJ4kKbv7NdVeSBLabTUcA4B0Na94De8sidBIlD6o67u8+9WNm440XF7Q0ktc3rTYOiSCCCDaO4kcVWmSSeN/Wh7D6PUl6mIgJaAl7R9oe9dBdCxGx6M1ATo2/jw9qM4/aeUwEjKuTSRePSDDjkuSFvTWnAM8Fxari3O1K3WF2ofklJs96ZhhxF5XZZ3Wd/wASHolSeWk9TD+m78KF7r7QazaALtCC31on5aHTTw/pO/CtD0Kjs5TKuYGp1gqcKSiYIKTJWjRF9l115Xub3KtTq3KkJKFEsmskoYKSlEs+mAvCU6F4WogGr5/3rxDRi65mXGrUuOWcgT4LrHlG2s/D4N3RnK+o4Uw/6gIJc4dsCB2uC4cGsaMxuTpOp7Y4BWiAbVrE8FWI7gpH1gVA8qMh3ndmoPkOHLRAdRpeAawD3q5inRR9I+wW/NA9wXmps/DjkHN/tqPAHsR/agtA0AhcDKqnI7OKnGJzLaoh570OxrYIcjG2qWvehdRsthOxvpC5rtg3bLoY3nM+oIAi2PMt8fZCFLpYVUTn5nchJJL0JwoS9YvCvWtUISAJJMCSJA9u3s01paHAG/iqm1sDUpPLXg9/NGNyWw4vnREt8sU17QIvzQSQGzGsC0DKmWizvVDAbIq1v3dNzu0Dq+LjYetaZ+6mJNIN+bBGsvMewFB5oR6k0i36U5rpMzFKt86HA8VofKFtVtbD4UT1hmn1QhdXdvE0zOQOA+o5rj/bOY+pDMZDn0wdNFeOSMovi7FvHKMlyVAsFS0GFxsmVGAEjtT8LVLTIVWMWxo1VrpB7FVc65SlSgFvOkqn61SUpEs+pJTXL2F4UAmQ8qODbUwD3H+W5jx29YMLR3h5XE24UuOZ3q7PyXcvKSwnAPj69MnuzfnC4w8QJJ70yK6ADa1GDACgNM8bKSrUJKYVVkOweSp37HT+y6qf85gf5vYtFtdxynhPrWT8llTosDUfVcGUzWcWlxDRAYybnhmnxlEtpb04IkgYmmYGrX2m9pFpXF8iDc5Ujq4JJRVsBbVp2d3e5Am9+n6CN1qgcQ5jw9sDQh3fcIZUoRmHLQ9hQxddMtk7dma2k68ePwCFv1V3Ful57LKnU1XWxqkczI7Y1JeL1MFiTmnkmp9IcVCDiDzTS4p5UbkSB7d3aDWZgTFtOd9AOK12B2NJFbEAcwwkQ0c38B3XWN3WoDPn1fIZSB/5jrBx7Br/ANl0TGUS/wCbJzAXe91gXczz7Aud5eZx+KN3i4U/kx+H2hUrOyYdsUxYviAe7/ZGm0iwXf4kqDCvZSpzIDRx5oU6u/EOm4Z9EDj2rmN2dFdBCrjqU3ueYF+9YffbZ7ZGIp2GYCo3SCdHjsJse2Oa2OLptpMgDrH2LL7ecXYepPEfhcwp3iTccir30J8mKlB2YZxuvaQuvE+nqu62cdDSLp2VIleqAPEk5JQB9QFIhPIXjkCxmfKDTnAVo4ZHeAqMn2SuI41s2/UruW/dXLgMQQJJa1v9z2t+K4Xi3AXJi2iZHQCg9t4CZVtbivamIH0R48VDT1VWyBPHuJp0ATLGtcGjg1xe4vtzJIce8diG02yimAo9I4UZAzk5SeD4t6yA0+HJWtzd334uo9rR1WAFxJgDNMAnnY2HJZ55Y4oOU3SQ5R5NA/DYl9Bwey3McHDt/Na1lVlSiajeIB7iDBB7ZlEsR5NnEXrMaexjn+8tVM7kVsMC9lYVGgEvZkLSRFyOsbgD2LlS/aPh5WqmuX9H3/g0wjOHXow+I893pH3lVaoVmt5x7z71DUC7MTJIgSXqQCuLEFOBFkxjU4ooh4So3FOKagQO7rNPSB4/lgkek/qge0n+lbjZ2AcZqVyQwGWtk9Yxr3KluVsXo6LalUQXnO1vGAOoXdmpjtWoGCLus8k9nD1Li+VlubSOv42KoJspGm6u4W6o80Rb1IxQwzaYk8NT8FJQpholCdr42TlEwLntWTZq0Dtq4vM4oBvJXy4UD6zy38Dv9KJvpEyTxn3LM704i1GlyDnnxJaPwn1rX4sLyJGPyJVBgCFJTF16KZUlOjfVdlnLRFCcU9zF4WHmoAZCSfk7V4oQ+o00p6aVAlXGUG1GOY5oc1zS0g3BnmvmKrSe57muEOaSHDkQYI8CvqRwXJvKXu4ynXbXoNcX16radSnHzbnuktdPDM4NBGhnheTZKOef4Y/KHZDlIkOPVDhzaXRmHdKotZddJwWznNfUptDK2JB/acVVb0jKJIkUqLD5zwO4C3YBlcfshzq1QCoHFroJLQyRwMNHhoqOfY14nVoE03lrg4atII7wZC6duKKWGxFap0o6DENaQYJDagcS0SJtD3XMcAsM3d2ofpN8A8+5qO7rbJxVOoGzDHXgZ5kXEdWBJAHis/leOs+NwenstglFSqev9HX8QwRwj81zbeHe6sKrqVFjMsEQ4Oc+oLhxtAaBy5AngQot5dqdLgyS1r3PDQ0nrNpU4gNY0yA6Bd2pM3gADC7F2o/DVQ9py/RJABIaYzFsgwY9YkcVyvD/AHfx4Zc8r5fiukNj5aVqrKxYo3BX6tHlpwVZ9NdlSEtFZlKV6acKxQbqiOx9hVcSXFsNa3znunKOwRqY4KznWwRxt9IByV4Ve2ps59Fxa6CJs4aH8kPTU01aFSi4umJF91dl/KMQxhHV85/oNuR4mG/1IVTYSumeTzZeSi6sdajso55GW9rp9QSM+XhBsdgx85pGpY0TPq5AKemOLtAvYAu63ZxKp4usXWFh3rgnaGY3GSSAbBDqNKZJBhWmUhxTMVVgaRZRAYOxL4JjgDbwWC20S+u88Aco/pt75W3wtM1a1NodGYwewak3toEVPkzw0ya+IHf0Q9uVdTwoVcjm+XK6RyzKV6xdXp+TfB8cRWP9dIf6FLR8nuzyY6aqTy6Wn8GreYkcka1T4XBPqvZTYMz3kNaJ1J58h2rrrPJ7gNRnI59MNPUiOx9zsLh6vS0mdcAiXVS6AdbG0xxRsFGK/wDK9/8A1TP7HfmvV03IObP7kkeQeKCSaU6E0oEGVCqG1Nktrta17nDK9tQZTHXYZYe0A3jiiGVeE8AoQ5/hdlHD0xQccz23e8fzXu6z6l79YmfFQM2TNRz2tgQYkWMa9/G60u3KcVp5tHxHwVEuIY9zTZvxkEfrsSJpNOzdik7VE+6e0xUcaNVrcwBLX5QC5o85ro+kLd4PYSh+/wBjsU1zKWBa81AA9wp0hUBaS5sVJBygwY00PZGZ2fiqjMlXOW5MU0VOWQuYT4ZXnwKOUt7qja9YNFKnNR7C7KS53RPNNhJceQ0Ai6b47clTEeVFQna9nOKmMqU6PySpScyowgEOBDgOAg9/jKv0/Jxjned0NMm+V9UZ/wC1gcvd8NqudXNSo75wgQ7IGktaTliGiwg3UrmbZcM4diiDeRVmQeIhybN/zZniivtXcfGYemaziyo1gBcKTnudlGsNLBIARituMNc7+Ys3j4LObR2ttNjSyrUxDWn60g2M2eBmGnArW7gbxTg6jKrszqby1hLnPe7PLjM8Gk+0BZssbVpjsTbfGtlHC7jszSXvMG4mJ7J/JXMTjhTp9BS6uW0jTtEcb8fFE9nMdWa+vdrWOyjUCGi7hzmYPaCsftjF+e0aklx5iYjuPuWd26TOjGKgm0Ado4jMSJsLepR7N2O6sHOaYaDEnj3exEt08C2tiQx7Q5uVxIIkGBFx3lb5uy2sAa1oaBoAAAPAJ8p8OkYOPN2zHYLdoy1si5Anv4ldDw+MoNp/Nvb0VJsZgDDWssSTFtLlWN3Nhio4veOo20EWcTw7o174R3GYAmjUw7S1tOpIc4A58jiczANCS0kBxNpmDxw5s+DWWVV2OhNwfxRjm7bwrzbE0z/W3x18Fca9rrsc0t+zBme0JmO3dw7GusXEixdl6umgaAFzjbjm4d0sJDptBg+sLm+PmxeTPjjs1TzuH5R0OoTN9AYtz5ILtesb3kcbyfUsPgd68TTIl/SNF8tS/qcL+slG8JtOliBYFtQXcCfXB4hbpeJPG7egR8mORUtmu3NwvXdU1DWgNm933JHcB7Vsn4lxtJKz27rQygwcxPfOnshEXOdnbDgGjNmBAJdIGWDwi614pcY0ZMiuRfBkFrgHNNi0taQQeGmnenNY20tbA0Ba0gWi1rKqawAkkd509agqbaotaX52lo4sOfWIs2TxHrTlMVxQUr5ajcj2te3i0tBHZ3L0U2QGimxrRwDWwY0Gmn5Ia7GMaMz3hoj6TgIibpf4rQ/5jTpoS4mRY2vHajzYOKCnQU/qU/7GpIZ/i9HmfUUlOROJqpXiQC8KeKPCmp68coQzm9tbo6YqEaEi2p4gd5hYHHbydI40qZyUnGRIiTFwfV610neljTQOdgc0EEgkgAXlxI4Bcj2icL0grUi/oszTUYHNcWmLODjMCbSfbISMkWzbgnxjdGs2Ds6jUw1RtZ4pgVWnNIHnhoZ6UuDgO0QosEyngK7adCk59as9jG4ms2o4NZUL5OSwzAtjqxmmTogmJ27Vq1A6nU6N7QBTLGUyKYIuGAiJgkZjBM6gGFq9jbXOOqUXuoVGNpVWjpXx86WhwNgIDgZkCReOCGJ+kTyL2/7fg5pvjgcX8sf8sdnqxZwyhrqYJyFgGjdbd83Wce0sNiR3EhbvyjYMfLXvJaC8S5rKbopngwvAh1QgEui4JCAbF2YalZs0X16TSekZRc3pC2D5jZkkWMdnatddGH2aChsnEU8B0ordNmdLmvdULGMDdG5hJdcGRHZMX0uxaOIrYVmdhNOSwtw7aEt6NxbI6Qty6cA5XqeFFLBlorGrhTT+bdVtUpOkMNIzfLJsDdhBaeEY3Z+9FSlTYynVeSWP/Z2saQXOe9xdmALz1SLWiFnmkn2acMpfwug7vltYUcOxlJpa1whjSOsBpLvEOM8TK51iKzQA2+a5e4mbngptsbVq1nh1QwQGsDSMuUNBiRzu43vcp+ycBRqMIeXir0gABAFMMAJc5xNy6bRZUpLsc5yl8Ua3yb7Iim7EnV5LGdjWm58XD/KpNvbYrOJZg6TquUw6tkLqbT9VsWJnjp38NT5PNmipg6IcJpBrp5VCXuMdrYN+enNB/KrszHPkUqWbDMDejZREwY6znMF5GggERyumxxp9yMsp10gNs/fHaNECm52HGX6NWkWuPOcrm38Edw3lLw7qc1g6nVBINNoNSY+k10Rl74PBBN0N5qbKPyPaLekpElodUGY0pPmOnrAA6EXb4Wz2/G6/yOoKlJ2fD1P3bpktm+RxGtrh3Edyz+V+zPHzfZU/x7KwyyXs0u0N+MO9ri0uBAnK5sF3YOBPiuZYuu6o8vdqTP8Asi27WzTVqgml0jG+c0ktaZBABcNL38FoMTuY03aOj+y17qn4rpfjeHh8RtY77GOUsi7MIArmzqZ6RhEjrDh61tae4MGS90dwCLYTd3DU2ghrn9snn2DRaZTtUSMK7PRvLQZTYM7S/IBlALyDl0Ibxm0SOK8wG8FSowFuGrudMm4DAeTSTpAmOCmbSosNqZHczKIA4x8URpluUQGi03IaBrw4pKil0MbYExGNxj7GhSb2PqF/ZcM9y8pbJc5rhWr06fSGXNoNazMZkS46/rVHRUJH0Y4EEn1CyjpPA6z2ucTEAhtu0XJn8kbSJRS/8JYeB1M5Gjn5r21MET4q7gMK5hdTZTpOFrU25G9zjHvPgnYjGWMUCW669YnsEhVf8RawD5qowCeJjsnh6kbBQT6PFf8AS0P/AHj/APmko/llT6v+Y/8A0SUsnZ0BeFDqmMLRJvyAEl1jAVjD4hzvOpub3wZ/Ip6khDVFiUimdJeIXgqc4HfGnNWsA49yzuGwVPE1+nc1nR0y5tIZW5qjgYfWfxc0EQwaWLrksy2t49oOpYetUa4AtpVHNvJkNJFuHevdn5adNjWBkMY1gMXgAAXjkEOQaJttbHp4inkfaCHNcAJY4cRPDhCbu7suqxuWqQWsfNMjiIPDgJMx3pVdsND8hsYnR0e5HpAAvFkEk3ZZzko8fQD2puxhKzs9an0hAgAuc1oHLIwgHvIJ7V5svZOGwxd0FFtLNBdlLutGkyf1JV7EYsfWPsVKpjQHAS4g8YBAjneVZzKUwPv6QcM5ukuabAxY5jPLzePJQbptoUcLTytaxxbmeQAHHNJBcddI15KzvDtBhYACHDOGubxGYxpHLN4wrlK30GgcMwAcf6eCpJloroC70bSpOwtaxcRTc6chc3NTGcAkCBcaq5s/Y2HxlU1XYVsDV9WizM8iwAzXsBckclFvLVa6l0bnEMe9jKrgC4MpZpeXBugLWlsni4IlsfadAB3RNxFcuMktoVQ10ea1peAxtNosBN7kySSTGN7C3WgxicZTosFwxgBiGlxLWi+Sm0TlA4xAWa23vTXpU31GYWs5oDspeGAkwS17mWIYYuJzQdAbK5j/AJZVrAtwhFJwYKgq1aTHEMLnBgyOd1CXDMOQIvNhe3cJjWh1R9fE0wT/ACq+ELWToAypSp5gPSk804WZXH1sLtmkX0QKOOa2TTJtVA4T9Mcnai02We3Z2qXNfs3FA9HUJY3N51CrNoB+2AY4EdqzmIeadcvbUJcHucH3a4mScxvLXTciTrxU21MW6s9j3A9KWjO6DLy0kNqdpgAT9lUkRGw3Dwtai2vndDBULBAkZ6ZLXvaY00HgjrMS4z0b3zqXPjLqTaRJ8OSD7G2tU6IZqfRU2BrWTIzcyGOjU3zHmVJid4XC4DTNoaCST61nk+zRFdBau5zozVnnhGUATzM9x/JMqY52UNY6RygCO4yhheSbjKYky4mf1KieQBeZ7CePcf1KU2XS6CjMSWjzGkmORme9eurQSS1t/qtYSBHrkoLiMTUnzGGY1eQV7RxjPNqecLkFphvqmPEoWw9BCZvnqN/qlx7L6d5U9NtQjqubw88Fx7TaLqOlSbVsyCRF3AgAG9rifBXqGwI+m4SLwbHnA4IdhIRVqDSHmwLWktAniQSLdnartB9UwchnlLbe2LdimobEc2mA2o5rhMF0PJvxkSfWiGz8K5sZ3knjHUafC/vVqK2Vugqcj6m/mki2U82+opK1fkHJhbDee3x9yss+l+uJSST46EPZG5U8fqe9eJIMMdg/ej+GxH3T/wAJUNb90PRakklzCCNlfxVT0me5bXaOo7z+FJJMXsDAmJ85S09PV8F4kkx+xd6M/tX97/Xh/e5H6vmjvHuSSTplYeghsDR3ej1NepJ0fqhU/sxypbS8wr1JH2A+Yt5f4qr6Z96M7O8/C/cO/wDmckkl5dF4bJ9u/vSnYLzfX70kkj0P9k+0fMH64FWMH5vi33BJJKlov7Lm2P4hnoH3hSbH81vePikkrPRVbY5/71vp/ktT9JvolJJFaC9klD9epWX6DvHvSSUWiPYISSSVAH//2Q==" />
                    </div>
                    <div className="cardbox-base">
                        <ul className="float-right">
                            <li><a><i className="fa fa-comments"></i></a></li>
                            <li><a><em className="mr-5">12</em></a></li>
                            <li><a><i className="fa fa-share-alt"></i></a></li>
                            <li><a><em className="mr-3">03</em></a></li>
                        </ul>
                        <ul>
                            <li><a><i className="fa fa-thumbs-up"></i></a></li>
                            <li><a href="teste"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/3.jpeg" className="img-fluid rounded-circle" alt="User" /></a></li>
                            <li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/1.jpg" className="img-fluid rounded-circle" alt="User" /></a></li>
                            <li><a href="teste"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/5.jpg" className="img-fluid rounded-circle" alt="User" /></a></li>
                            <li><a href="teste"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/2.jpg" className="img-fluid rounded-circle" alt="User" /></a></li>
                            <li><a><span>242 Likes</span></a></li>
                        </ul>
                    </div>
                    <div className="card card-default">
                        <div className="card-header">
                            <h3 className="card-title">
                                <span className="glyphicon glyphicon-comment"></span>
                               Comentários
                            </h3>
                        </div>
                        <div className="card-body">
                            <ul className="media-list">
                                <li className="media">
                                    <div className="media-left">
                                        <img src="http://placehold.it/60x60" className="img-circle" />
                                    </div>
                                    <div className="media-body">
                                        <h4 className="media-heading "> Mauris Eu <br />
                                            <small>
                                                commented on <a href="teste">Post Title</a>
                                            </small>
                                        </h4>
                                        <p>
                                            Vivamus pulvinar mauris eu placerat blandit. In euismod tellus vel ex vestibulum congue...
                                        </p>
                                    </div>
                                </li>
                                <li className="media">
                                    <div className="media-left">
                                        <img src="http://placehold.it/60x60" className="img-circle" />
                                    </div>
                                    <div className="media-body">
                                        <h4 className="media-heading">
                                            Aenean Consect
                                            <br />
                                            <small>
                                                commented on <a href="#">Post Title</a>
                                            </small>
                                        </h4>
                                        <p>
                                            Curabitur vel malesuada tortor, sit amet ultricies mauris. Aenean consectetur ultricies luctus.
                                        </p>
                                    </div>
                                </li>
                                <li className="media">
                                    <div className="media-left">
                                        <img src="http://placehold.it/60x60" className="img-circle" />
                                    </div>
                                    <div className="media-body">
                                        <h4 className="media-heading">
                                            Praesent Tinci
                                            <br />
                                            <small>
                                                commented on <a href="#">Post Title</a>
                                            </small>
                                        </h4>
                                        <p>
                                            Sed convallis dignissim magna et dignissim. Praesent tincidunt sapien eu gravida dignissim.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <a href="#" className="btn btn-default btn-block">More comments »</a>
                            
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="form-group col-md-10">
                                <textarea className="form-control" id="comentario"></textarea>
                            </div>
                            <div className="form-group col-md-2">
                                <button className="btn btn-info btn-lg btn-send"><i class="fa fa-paper-plane"></i> </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>



);

export default Conteudo;
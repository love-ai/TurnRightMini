window._CCSettings = {
    platform: "wechatgame-subcontext",
    groupList: [
        "default"
    ],
    collisionMatrix: [
        [
            true
        ]
    ],
    rawAssets: {
        assets: {
            a2rIpp7KZEMoAWaQCKRibr: [
                "panel/GameOverRank.prefab",
                "cc.Prefab"
            ],
            "bdy1WXHvFHoJ+NeduSEAHW": [
                "panel/RankItem.prefab",
                "cc.Prefab"
            ]
        }
    },
    launchScene: "db://assets/Scene/GameRankingList.fire",
    scenes: [
        {
            url: "db://assets/Scene/GameRankingList.fire",
            uuid: "43EPMafkhAmpmcF4zF/KVi"
        }
    ],
    packedAssets: {
        WECHAT_SUBDOMAIN: [
            "02delMVqdBD70a/HSD99FK",
            "43EPMafkhAmpmcF4zF/KVi",
            "5cO7kybDxGj4ipyMYdRYZB",
            "5f5dyqtRNNxaFmVzYns6FZ",
            "61cyPdEfRN047sDK9rO0W5",
            "a2MjXRFdtLlYQ5ouAFv/+R",
            "a2rIpp7KZEMoAWaQCKRibr",
            "bdy1WXHvFHoJ+NeduSEAHW",
            "d608qFRoFHwbXd0Dap056i"
        ]
    },
    md5AssetsMap: {},
    orientation: "",
    debug: true,
    subpackages: {},
    WECHAT_SUBDOMAIN_DATA: [
        {
            __type__: "cc.Texture2D",
            content: "0,9729,9729,33071,33071,0"
        },
        [
            {
                __type__: "cc.SceneAsset",
                _name: "GameRankingList",
                scene: {
                    __id__: 1
                },
                asyncLoadAssets: null
            },
            {
                __type__: "cc.Scene",
                _name: "New Node",
                _children: [
                    {
                        __id__: 2
                    }
                ],
                _anchorPoint: {
                    __type__: "cc.Vec2"
                },
                _scale: {
                    __type__: "cc.Vec3",
                    x: 0.1,
                    y: 0.1,
                    z: 0.1
                },
                autoReleaseAssets: false
            },
            {
                __type__: "cc.Node",
                _name: "Canvas",
                _parent: {
                    __id__: 1
                },
                _children: [
                    {
                        __id__: 3
                    },
                    {
                        __id__: 4
                    }
                ],
                _components: [
                    {
                        __type__: "cc.Canvas",
                        node: {
                            __id__: 2
                        },
                        _designResolution: {
                            __type__: "cc.Size",
                            width: 1080,
                            height: 1920
                        },
                        _fitWidth: true,
                        _fitHeight: false
                    }
                ],
                _color: {
                    __type__: "cc.Color",
                    r: 252,
                    g: 252,
                    b: 252
                },
                _contentSize: {
                    __type__: "cc.Size",
                    width: 1080,
                    height: 1920
                },
                _position: {
                    __type__: "cc.Vec3",
                    x: 540,
                    y: 960
                },
                _scale: {
                    __type__: "cc.Vec3",
                    x: 1,
                    y: 1,
                    z: 1
                },
                _id: "a286bbGknJLZpRpxROV6M94"
            },
            {
                __type__: "cc.Node",
                _name: "Main Camera",
                _parent: {
                    __id__: 2
                },
                _level: 1,
                _components: [
                    {
                        __type__: "cc.Camera",
                        node: {
                            __id__: 3
                        },
                        _clearFlags: 7,
                        _backgroundColor: {
                            __type__: "cc.Color",
                            a: 0
                        },
                        _depth: -1
                    }
                ],
                _scale: {
                    __type__: "cc.Vec3",
                    x: 1,
                    y: 1,
                    z: 1
                }
            },
            {
                __type__: "cc.Node",
                _name: "GameRankingList",
                _parent: {
                    __id__: 2
                },
                _children: [
                    {
                        __id__: 5
                    },
                    {
                        __id__: 13
                    },
                    {
                        __id__: 14
                    }
                ],
                _components: [
                    {
                        __type__: "a0ea2Faum1JDKkSr0Ka631L",
                        node: {
                            __id__: 4
                        },
                        rankingScrollView: {
                            __id__: 10
                        },
                        scrollViewContent: {
                            __id__: 11
                        },
                        prefabRankItem: {
                            __uuid__: "bdy1WXHvFHoJ+NeduSEAHW"
                        },
                        prefabGameOverRank: {
                            __uuid__: "a2rIpp7KZEMoAWaQCKRibr"
                        },
                        gameOverRankLayout: {
                            __id__: 13
                        },
                        loadingLabel: {
                            __id__: 14
                        }
                    }
                ],
                _color: {
                    __type__: "cc.Color",
                    r: 27,
                    g: 38,
                    b: 46
                },
                _contentSize: {
                    __type__: "cc.Size",
                    width: 1080,
                    height: 1920
                },
                _scale: {
                    __type__: "cc.Vec3",
                    x: 1,
                    y: 1,
                    z: 1
                }
            },
            {
                __type__: "cc.Node",
                _name: "rankingScrollView",
                _parent: {
                    __id__: 4
                },
                _children: [
                    {
                        __id__: 6
                    },
                    {
                        __id__: 12
                    }
                ],
                _components: [
                    {
                        __id__: 10
                    }
                ],
                _color: {
                    __type__: "cc.Color",
                    r: 184,
                    g: 184,
                    b: 184
                },
                _contentSize: {
                    __type__: "cc.Size",
                    width: 600,
                    height: 700
                },
                _position: {
                    __type__: "cc.Vec3",
                    y: 74
                },
                _scale: {
                    __type__: "cc.Vec3",
                    x: 1,
                    y: 1,
                    z: 1
                }
            },
            {
                __type__: "cc.Node",
                _name: "scrollBar",
                _parent: {
                    __id__: 5
                },
                _children: [
                    {
                        __id__: 7
                    }
                ],
                _components: [
                    {
                        __id__: 9
                    },
                    {
                        __type__: "cc.Widget",
                        node: {
                            __id__: 6
                        },
                        alignMode: 0,
                        _alignFlags: 37,
                        _left: 350.07654921020657,
                        _right: -12,
                        _originalHeight: 237
                    },
                    {
                        __type__: "cc.Sprite",
                        node: {
                            __id__: 6
                        },
                        _spriteFrame: {
                            __uuid__: "5f5dyqtRNNxaFmVzYns6FZ"
                        },
                        _type: 1,
                        _sizeMode: 0
                    }
                ],
                _color: {
                    __type__: "cc.Color",
                    r: 238,
                    g: 217,
                    b: 227
                },
                _contentSize: {
                    __type__: "cc.Size",
                    width: 12,
                    height: 700
                },
                _anchorPoint: {
                    __type__: "cc.Vec2",
                    x: 1,
                    y: 0.5
                },
                _position: {
                    __type__: "cc.Vec3",
                    x: 312
                },
                _scale: {
                    __type__: "cc.Vec3",
                    x: 1,
                    y: 1,
                    z: 1
                }
            },
            {
                __type__: "cc.Node",
                _name: "bar",
                _parent: {
                    __id__: 6
                },
                _components: [
                    {
                        __id__: 8
                    }
                ],
                _color: {
                    __type__: "cc.Color",
                    r: 236,
                    g: 241,
                    b: 245
                },
                _contentSize: {
                    __type__: "cc.Size",
                    width: 10,
                    height: 30
                },
                _anchorPoint: {
                    __type__: "cc.Vec2",
                    x: 1
                },
                _position: {
                    __type__: "cc.Vec3",
                    x: -1
                },
                _scale: {
                    __type__: "cc.Vec3",
                    x: 1,
                    y: 1,
                    z: 1
                }
            },
            {
                __type__: "cc.Sprite",
                node: {
                    __id__: 7
                },
                _spriteFrame: {
                    __uuid__: "5cO7kybDxGj4ipyMYdRYZB"
                },
                _type: 1,
                _sizeMode: 0
            },
            {
                __type__: "cc.Scrollbar",
                node: {
                    __id__: 6
                },
                _scrollView: {
                    __id__: 10
                },
                _N$handle: {
                    __id__: 8
                },
                _N$direction: 1
            },
            {
                __type__: "cc.ScrollView",
                node: {
                    __id__: 5
                },
                horizontal: false,
                brake: 0.75,
                bounceDuration: 0.23,
                _N$content: {
                    __id__: 11
                },
                content: {
                    __id__: 11
                },
                _N$horizontalScrollBar: null,
                _N$verticalScrollBar: {
                    __id__: 9
                }
            },
            {
                __type__: "cc.Node",
                _name: "scrollViewContent",
                _parent: {
                    __id__: 12
                },
                _components: [
                    {
                        __type__: "cc.Layout",
                        node: {
                            __id__: 11
                        },
                        _layoutSize: {
                            __type__: "cc.Size",
                            width: 600,
                            height: 700
                        },
                        _resize: 1,
                        _N$layoutType: 2
                    }
                ],
                _contentSize: {
                    __type__: "cc.Size",
                    width: 600,
                    height: 700
                },
                _anchorPoint: {
                    __type__: "cc.Vec2",
                    x: 0.5,
                    y: 1
                },
                _position: {
                    __type__: "cc.Vec3",
                    y: 350
                },
                _scale: {
                    __type__: "cc.Vec3",
                    x: 1,
                    y: 1,
                    z: 1
                }
            },
            {
                __type__: "cc.Node",
                _name: "view",
                _parent: {
                    __id__: 5
                },
                _children: [
                    {
                        __id__: 11
                    }
                ],
                _components: [
                    {
                        __type__: "cc.Mask",
                        node: {
                            __id__: 12
                        },
                        _N$alphaThreshold: 1
                    }
                ],
                _contentSize: {
                    __type__: "cc.Size",
                    width: 600,
                    height: 700
                },
                _scale: {
                    __type__: "cc.Vec3",
                    x: 1,
                    y: 1,
                    z: 1
                }
            },
            {
                __type__: "cc.Node",
                _name: "gameOverRankLayout",
                _parent: {
                    __id__: 4
                },
                _components: [
                    {
                        __type__: "cc.Layout",
                        node: {
                            __id__: 13
                        },
                        _layoutSize: {
                            __type__: "cc.Size",
                            width: 600,
                            height: 200
                        },
                        _N$layoutType: 1
                    }
                ],
                _color: {
                    __type__: "cc.Color",
                    r: 167,
                    g: 167,
                    b: 167
                },
                _contentSize: {
                    __type__: "cc.Size",
                    width: 600,
                    height: 200
                },
                _position: {
                    __type__: "cc.Vec3",
                    y: -270
                },
                _scale: {
                    __type__: "cc.Vec3",
                    x: 1,
                    y: 1,
                    z: 1
                }
            },
            {
                __type__: "cc.Node",
                _name: "loadingLabel",
                _parent: {
                    __id__: 4
                },
                _components: [
                    {
                        __type__: "cc.Label",
                        node: {
                            __id__: 14
                        },
                        _srcBlendFactor: 1,
                        _useOriginalSize: false,
                        _string: "玩命加载中...",
                        _N$string: "玩命加载中...",
                        _fontSize: 60,
                        _lineHeight: 60,
                        _N$horizontalAlign: 1,
                        _N$verticalAlign: 1
                    }
                ],
                _contentSize: {
                    __type__: "cc.Size",
                    width: 350.01,
                    height: 60
                },
                _position: {
                    __type__: "cc.Vec3",
                    y: 130
                },
                _scale: {
                    __type__: "cc.Vec3",
                    x: 1,
                    y: 1,
                    z: 1
                }
            }
        ],
        {
            __type__: "cc.SpriteFrame",
            content: {
                name: "default_scrollbar_vertical",
                texture: "d608qFRoFHwbXd0Dap056i",
                rect: [
                    0,
                    0,
                    15,
                    30
                ],
                offset: [
                    0,
                    0
                ],
                originalSize: [
                    15,
                    30
                ],
                capInsets: [
                    4,
                    10,
                    4,
                    10
                ]
            }
        },
        {
            __type__: "cc.SpriteFrame",
            content: {
                name: "default_scrollbar_vertical_bg",
                texture: "61cyPdEfRN047sDK9rO0W5",
                rect: [
                    0,
                    0,
                    15,
                    30
                ],
                offset: [
                    0,
                    0
                ],
                originalSize: [
                    15,
                    30
                ],
                capInsets: [
                    4,
                    10,
                    4,
                    10
                ]
            }
        },
        {
            __type__: "cc.Texture2D",
            content: "0,9729,9729,33071,33071,0"
        },
        {
            __type__: "cc.SpriteFrame",
            content: {
                name: "default_sprite_splash",
                texture: "02delMVqdBD70a/HSD99FK",
                rect: [
                    0,
                    0,
                    2,
                    2
                ],
                offset: [
                    0,
                    0
                ],
                originalSize: [
                    2,
                    2
                ],
                capInsets: [
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        [
            {
                __type__: "cc.Prefab",
                _name: "GameOverRank",
                data: {
                    __id__: 1
                }
            },
            {
                __type__: "cc.Node",
                _name: "GameOverRank",
                _children: [
                    {
                        __id__: 2
                    },
                    {
                        __id__: 3
                    },
                    {
                        __id__: 5
                    },
                    {
                        __id__: 7
                    },
                    {
                        __id__: 9
                    }
                ],
                _components: [
                    {
                        __type__: "d97bdIn/jtJmpn7qz0kKhI5",
                        node: {
                            __id__: 1
                        },
                        backSprite: {
                            __id__: 2
                        },
                        rankLabel: {
                            __id__: 4
                        },
                        avatarImgSprite: {
                            __id__: 6
                        },
                        nickLabel: {
                            __id__: 8
                        },
                        topScoreLabel: {
                            __id__: 10
                        }
                    }
                ],
                _prefab: {
                    __type__: "cc.PrefabInfo",
                    root: {
                        __id__: 1
                    },
                    asset: {
                        __uuid__: "a2rIpp7KZEMoAWaQCKRibr"
                    },
                    fileId: "14ii8sHnBDPouGcgNf6EX8"
                },
                _color: {
                    __type__: "cc.Color",
                    r: 66,
                    g: 66,
                    b: 66
                },
                _contentSize: {
                    __type__: "cc.Size",
                    width: 200,
                    height: 200
                },
                _scale: {
                    __type__: "cc.Vec3",
                    x: 1,
                    y: 1,
                    z: 1
                }
            },
            {
                __type__: "cc.Node",
                _name: "backSprite",
                _parent: {
                    __id__: 1
                },
                _active: false,
                _components: [
                    {
                        __type__: "cc.Sprite",
                        node: {
                            __id__: 2
                        },
                        _spriteFrame: {
                            __uuid__: "a2MjXRFdtLlYQ5ouAFv/+R"
                        },
                        _sizeMode: 0
                    }
                ],
                _prefab: {
                    __type__: "cc.PrefabInfo",
                    root: {
                        __id__: 1
                    },
                    asset: {
                        __uuid__: "a2rIpp7KZEMoAWaQCKRibr"
                    },
                    fileId: "65bWKFnBpFOounjd2qCDe5"
                },
                _color: {
                    __type__: "cc.Color",
                    r: 70,
                    g: 70,
                    b: 70
                },
                _contentSize: {
                    __type__: "cc.Size",
                    width: 200,
                    height: 200
                },
                _scale: {
                    __type__: "cc.Vec3",
                    x: 1,
                    y: 1,
                    z: 1
                }
            },
            {
                __type__: "cc.Node",
                _name: "rankLabel",
                _parent: {
                    __id__: 1
                },
                _components: [
                    {
                        __id__: 4
                    }
                ],
                _prefab: {
                    __type__: "cc.PrefabInfo",
                    root: {
                        __id__: 1
                    },
                    asset: {
                        __uuid__: "a2rIpp7KZEMoAWaQCKRibr"
                    },
                    fileId: "5b706tWL1Ky7MF9dVXKyCZ"
                },
                _contentSize: {
                    __type__: "cc.Size",
                    width: 28,
                    height: 50
                },
                _position: {
                    __type__: "cc.Vec3",
                    y: 78
                },
                _scale: {
                    __type__: "cc.Vec3",
                    x: 1,
                    y: 1,
                    z: 1
                }
            },
            {
                __type__: "cc.Label",
                node: {
                    __id__: 3
                },
                _useOriginalSize: false,
                _string: "1",
                _N$string: "1",
                _fontSize: 50,
                _lineHeight: 50,
                _N$horizontalAlign: 1,
                _N$verticalAlign: 1
            },
            {
                __type__: "cc.Node",
                _name: "avatarImgSprite",
                _parent: {
                    __id__: 1
                },
                _components: [
                    {
                        __id__: 6
                    }
                ],
                _prefab: {
                    __type__: "cc.PrefabInfo",
                    root: {
                        __id__: 1
                    },
                    asset: {
                        __uuid__: "a2rIpp7KZEMoAWaQCKRibr"
                    },
                    fileId: "83PmnMFtFBObDuZxwEe3gb"
                },
                _contentSize: {
                    __type__: "cc.Size",
                    width: 60,
                    height: 60
                },
                _position: {
                    __type__: "cc.Vec3",
                    y: 21
                },
                _scale: {
                    __type__: "cc.Vec3",
                    x: 1,
                    y: 1,
                    z: 1
                }
            },
            {
                __type__: "cc.Sprite",
                node: {
                    __id__: 5
                },
                _spriteFrame: {
                    __uuid__: "a2MjXRFdtLlYQ5ouAFv/+R"
                },
                _sizeMode: 0
            },
            {
                __type__: "cc.Node",
                _name: "nickLabel",
                _parent: {
                    __id__: 1
                },
                _components: [
                    {
                        __id__: 8
                    }
                ],
                _prefab: {
                    __type__: "cc.PrefabInfo",
                    root: {
                        __id__: 1
                    },
                    asset: {
                        __uuid__: "a2rIpp7KZEMoAWaQCKRibr"
                    },
                    fileId: "e1gbwc9AdAAI3ZDCLrYH2C"
                },
                _color: {
                    __type__: "cc.Color",
                    r: 216,
                    g: 216,
                    b: 216
                },
                _contentSize: {
                    __type__: "cc.Size",
                    width: 190,
                    height: 25
                },
                _position: {
                    __type__: "cc.Vec3",
                    y: -36
                },
                _scale: {
                    __type__: "cc.Vec3",
                    x: 1,
                    y: 1,
                    z: 1
                }
            },
            {
                __type__: "cc.Label",
                node: {
                    __id__: 7
                },
                _useOriginalSize: false,
                _string: "追风少年",
                _N$string: "追风少年",
                _fontSize: 25,
                _lineHeight: 25,
                _enableWrapText: false,
                _N$horizontalAlign: 1,
                _N$verticalAlign: 1,
                _N$overflow: 2
            },
            {
                __type__: "cc.Node",
                _name: "topScoreLabel",
                _parent: {
                    __id__: 1
                },
                _components: [
                    {
                        __id__: 10
                    }
                ],
                _prefab: {
                    __type__: "cc.PrefabInfo",
                    root: {
                        __id__: 1
                    },
                    asset: {
                        __uuid__: "a2rIpp7KZEMoAWaQCKRibr"
                    },
                    fileId: "01cUXJBCNKzJRsjoFj+m0j"
                },
                _contentSize: {
                    __type__: "cc.Size",
                    width: 83,
                    height: 30
                },
                _position: {
                    __type__: "cc.Vec3",
                    y: -73
                },
                _scale: {
                    __type__: "cc.Vec3",
                    x: 1,
                    y: 1,
                    z: 1
                }
            },
            {
                __type__: "cc.Label",
                node: {
                    __id__: 9
                },
                _useOriginalSize: false,
                _string: "12300",
                _N$string: "12300",
                _fontSize: 30,
                _lineHeight: 30,
                _N$horizontalAlign: 2,
                _N$verticalAlign: 1
            }
        ],
        [
            {
                __type__: "cc.Prefab",
                _name: "RankItem",
                data: {
                    __id__: 1
                }
            },
            {
                __type__: "cc.Node",
                _name: "RankItem",
                _children: [
                    {
                        __id__: 2
                    },
                    {
                        __id__: 3
                    },
                    {
                        __id__: 5
                    },
                    {
                        __id__: 7
                    },
                    {
                        __id__: 9
                    }
                ],
                _components: [
                    {
                        __type__: "dd553fmL+BGfJ9idSJ4ApIP",
                        node: {
                            __id__: 1
                        },
                        backSprite: {
                            __id__: 2
                        },
                        rankLabel: {
                            __id__: 4
                        },
                        avatarImgSprite: {
                            __id__: 6
                        },
                        nickLabel: {
                            __id__: 8
                        },
                        topScoreLabel: {
                            __id__: 10
                        }
                    }
                ],
                _prefab: {
                    __type__: "cc.PrefabInfo",
                    root: {
                        __id__: 1
                    },
                    asset: {
                        __uuid__: "bdy1WXHvFHoJ+NeduSEAHW"
                    },
                    fileId: "14ii8sHnBDPouGcgNf6EX8"
                },
                _color: {
                    __type__: "cc.Color",
                    r: 66,
                    g: 66,
                    b: 66
                },
                _contentSize: {
                    __type__: "cc.Size",
                    width: 600,
                    height: 90
                },
                _scale: {
                    __type__: "cc.Vec3",
                    x: 1,
                    y: 1,
                    z: 1
                }
            },
            {
                __type__: "cc.Node",
                _name: "backSprite",
                _parent: {
                    __id__: 1
                },
                _active: false,
                _components: [
                    {
                        __type__: "cc.Sprite",
                        node: {
                            __id__: 2
                        },
                        _spriteFrame: {
                            __uuid__: "a2MjXRFdtLlYQ5ouAFv/+R"
                        },
                        _sizeMode: 0
                    }
                ],
                _prefab: {
                    __type__: "cc.PrefabInfo",
                    root: {
                        __id__: 1
                    },
                    asset: {
                        __uuid__: "bdy1WXHvFHoJ+NeduSEAHW"
                    },
                    fileId: "65bWKFnBpFOounjd2qCDe5"
                },
                _color: {
                    __type__: "cc.Color",
                    r: 70,
                    g: 70,
                    b: 70
                },
                _contentSize: {
                    __type__: "cc.Size",
                    width: 600,
                    height: 90
                },
                _scale: {
                    __type__: "cc.Vec3",
                    x: 1,
                    y: 1,
                    z: 1
                }
            },
            {
                __type__: "cc.Node",
                _name: "rankLabel",
                _parent: {
                    __id__: 1
                },
                _components: [
                    {
                        __id__: 4
                    }
                ],
                _prefab: {
                    __type__: "cc.PrefabInfo",
                    root: {
                        __id__: 1
                    },
                    asset: {
                        __uuid__: "bdy1WXHvFHoJ+NeduSEAHW"
                    },
                    fileId: "5b706tWL1Ky7MF9dVXKyCZ"
                },
                _contentSize: {
                    __type__: "cc.Size",
                    width: 17,
                    height: 30
                },
                _position: {
                    __type__: "cc.Vec3",
                    x: -270
                },
                _scale: {
                    __type__: "cc.Vec3",
                    x: 1,
                    y: 1,
                    z: 1
                }
            },
            {
                __type__: "cc.Label",
                node: {
                    __id__: 3
                },
                _useOriginalSize: false,
                _string: "1",
                _N$string: "1",
                _fontSize: 30,
                _lineHeight: 30,
                _N$horizontalAlign: 1,
                _N$verticalAlign: 1
            },
            {
                __type__: "cc.Node",
                _name: "avatarImgSprite",
                _parent: {
                    __id__: 1
                },
                _components: [
                    {
                        __id__: 6
                    }
                ],
                _prefab: {
                    __type__: "cc.PrefabInfo",
                    root: {
                        __id__: 1
                    },
                    asset: {
                        __uuid__: "bdy1WXHvFHoJ+NeduSEAHW"
                    },
                    fileId: "998GufUAhB8YaZxbaSDKJG"
                },
                _contentSize: {
                    __type__: "cc.Size",
                    width: 60,
                    height: 60
                },
                _position: {
                    __type__: "cc.Vec3",
                    x: -201
                },
                _scale: {
                    __type__: "cc.Vec3",
                    x: 1,
                    y: 1,
                    z: 1
                }
            },
            {
                __type__: "cc.Sprite",
                node: {
                    __id__: 5
                },
                _sizeMode: 0
            },
            {
                __type__: "cc.Node",
                _name: "nickLabel",
                _parent: {
                    __id__: 1
                },
                _components: [
                    {
                        __id__: 8
                    }
                ],
                _prefab: {
                    __type__: "cc.PrefabInfo",
                    root: {
                        __id__: 1
                    },
                    asset: {
                        __uuid__: "bdy1WXHvFHoJ+NeduSEAHW"
                    },
                    fileId: "e1gbwc9AdAAI3ZDCLrYH2C"
                },
                _color: {
                    __type__: "cc.Color",
                    r: 216,
                    g: 216,
                    b: 216
                },
                _contentSize: {
                    __type__: "cc.Size",
                    width: 300,
                    height: 30
                },
                _anchorPoint: {
                    __type__: "cc.Vec2",
                    y: 0.5
                },
                _position: {
                    __type__: "cc.Vec3",
                    x: -142
                },
                _scale: {
                    __type__: "cc.Vec3",
                    x: 1,
                    y: 1,
                    z: 1
                }
            },
            {
                __type__: "cc.Label",
                node: {
                    __id__: 7
                },
                _useOriginalSize: false,
                _string: "追风少年",
                _N$string: "追风少年",
                _fontSize: 30,
                _lineHeight: 30,
                _enableWrapText: false,
                _N$verticalAlign: 1,
                _N$overflow: 1
            },
            {
                __type__: "cc.Node",
                _name: "topScoreLabel",
                _parent: {
                    __id__: 1
                },
                _components: [
                    {
                        __id__: 10
                    }
                ],
                _prefab: {
                    __type__: "cc.PrefabInfo",
                    root: {
                        __id__: 1
                    },
                    asset: {
                        __uuid__: "bdy1WXHvFHoJ+NeduSEAHW"
                    },
                    fileId: "01cUXJBCNKzJRsjoFj+m0j"
                },
                _contentSize: {
                    __type__: "cc.Size",
                    width: 97,
                    height: 35
                },
                _anchorPoint: {
                    __type__: "cc.Vec2",
                    x: 1,
                    y: 0.5
                },
                _position: {
                    __type__: "cc.Vec3",
                    x: 280
                },
                _scale: {
                    __type__: "cc.Vec3",
                    x: 1,
                    y: 1,
                    z: 1
                }
            },
            {
                __type__: "cc.Label",
                node: {
                    __id__: 9
                },
                _useOriginalSize: false,
                _string: "12300",
                _N$string: "12300",
                _fontSize: 35,
                _lineHeight: 35,
                _N$horizontalAlign: 2,
                _N$verticalAlign: 1
            }
        ],
        {
            __type__: "cc.Texture2D",
            content: "0,9729,9729,33071,33071,0"
        }
    ]
};
